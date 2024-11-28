/*
    서버 사용하는 방법
    1. npm, node 설치
    2. npm install -g json-server 실행
    3. json-server --watch db.json(파일이름) 
       이때, db.json 파일이 있는 경로에서 위 명령어를 실행해야 함
    +) 만약 이미 사용중인 port라는 오류가 나오면 
       json-server --watch db.json --port 8080 
       이렇게 뒤에 port를 지정하는 명령어로 포트를 변경하면 됨
*/

// 실습 코드
const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:3000/todos";

interface Todo {
    id: number;
    title: string;
    createdAt: string;
    completed: boolean;
}

fetch(API_URL)
    .then((response) => response.json())
    .then((data: Todo[]) => renderTodo(data));
    // json으로 받을 데이터의 타입 명시

const updateTodo = (todoId, originalTitle) => {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    if (!todoItem) return;

    // mission
    // 수정버튼 클릭 시 todoItem의 listEl에 접근, 그부분을 input태그로 바꾸기
    todoItem.innerHTML = "";

    const inputEl = document.createElement("input");
    inputEl.type = "text"; // text, email, password, tel, url, number, date 등 다양한 type 있음
    inputEl.value = originalTitle;
    todoItem.append(inputEl);

    // 수정버튼 클릭 시 span 생성, 거기 button 추가, todoItem에 append하기
    const spanEl = document.createElement("span");
    const confirmBtnEl = document.createElement("button");
    confirmBtnEl.textContent = "confirm";
    confirmBtnEl.onclick = () => {
        // 버튼 클릭 시 리스트 수정
        const updatedTitle = inputEl.value;
        // todo를 업데이트 하는 부분
        updateList(todoId, updatedTitle)
            // todo를 불러오고 render하는 부분
            .then(() => {
                return fetchTodos();
            })
            .then((data) => renderTodo(data))
            .catch((error) => {
                console.error("Error updating todo:", error);
            })
    };
    spanEl.append(confirmBtnEl);
    todoItem.append(spanEl);

    // 엔터키 입력 시 리스트 수정
    inputEl.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // 기본 Enter 동작 방지
            const updatedTitle = inputEl.value;

            // todo를 업데이트 하는 부분
            // updateList가 아무것도 반환하지 않으면 TS는 반환 타입을 void로 추론함
            // 따라서 호출하는 쪽에서 updateList가 Promise를 반환한다고 인식하지 못하고, 반환 타입을 void로 인식하는 문제가 발생함
            // 해결하려면 updateList 함수에서 반환값을 명시적으로 지정하고, Promise를 반환하도록 수정해야 함
            updateList(todoId, updatedTitle)
                // todo를 불러오고 render하는 부분
                .then(() => {
                    return fetchTodos();
                })
                .then((data) => renderTodo(data))
                .catch((error) => {
                    console.error("Error updating todo:", error);
                })
        }
    });
};

const updateList = (todoId, newTitle): Promise<void> => {
    if (!newTitle) return Promise.reject("Title cannot be empty"); 

    // todo를 업데이트 하는 부분
    return fetch(API_URL + '/' + todoId, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "title": newTitle
            // PATCH요청이므로 수정하려는 부분만 보내면 되고,
            // 만약 PUT요청을 보내면 전체 리소스의 필드를 보내야 함(id, completed, created, title 모두)
        })
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Failed to update the todo");
        }
    })

    // fetch() 자체는 Promise<Response>를 반환함(성공, 실패 여부와 관계 없이 항상 반환함)
    // 이 Response 객체를 처리하지 않고 반환하면 타입 충돌이 일어날 수 있음(반환형이 Promise<void>이므로)
    // then을 사용해 fetch의 응답을 처리한 후, 필요한 작업만 수행하고 Promise<void>를 반환하면 됨
};

const fetchTodos = () => {
    return fetch(API_URL).then((response) => response.json());
}

const renderTodo = (newTodos) => {
    (todoInputEl as HTMLInputElement).innerHTML = "";
    newTodos.forEach((todo) => {
        const listEl = document.createElement("li");
        listEl.textContent = todo.title;
        listEl.id = `todo-${todo.id}`;
        // 이 listElement의 listId를 설정해서,
        // updateTodo에서 document.querySelector로 이 id값을 가진 요소를 찾을 때 사용함

        const deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.onclick = () => deleteTodo(todo.id);

        const updateEl = document.createElement("span");
        updateEl.textContent = "✏️";
        updateEl.onclick = () => updateTodo(todo.id, todo.title);
        // todo.id: 생성한 리스트의 id

        listEl.append(deleteEl);
        listEl.append(updateEl);
        (todoInputEl as HTMLInputElement).append(listEl);
    });
};

const addTodo = () => {
    const title = (todoInputEl as HTMLInputElement).value;
    const date = new Date();
    const createdAt = date.toDateString();

    if (!title) return;

    const newTodo = {

        id: date.getTime().toString(),
        title,
        createdAt,
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newTodo, completed: false }),
    })
        .then((response) => response.json())
        .then(() => {
            if (todoInputEl) { // 작성했던 추가 todolist를 초기화하는 코드
                (todoInputEl as HTMLInputElement).value = "";
              }
            return fetch(API_URL);
        })
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};

const deleteTodo = (todoId) => {
    fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    })
        .then(() => fetch(API_URL))
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};




// 강의 코드
/*


const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput"); // Add 버튼

const API_URL = "http://localhost:3000/todos";

fetch(API_URL) // fetch: 지정된 경로에 GET요청을 보내고 Promise객체를 반환함
    .then((response) => response.json()) // 네트워크 요청이 성공했을 때 실행될 콜백함수 정의
                                         // response.json: 응답 데이터를 JSON형태로 파싱해 JS객체로 변환, 비동기적으로 동작하며 Promise를 반환함
    .then((data) => renderTodo(data)); // response.json()이 반한한 Promise가 성공했을 때, 그 Promise는 파싱된 JSON데이터를 data로 전달함
                                       // 즉 data는 JSON서버에서 받아온 todos 배열

const renderTodo = (newTodos) => {
    todoListEl.innerHTML = "" // 기존의 리스트를 삭제하고 새로운 리스트 생성
    newTodos.forEach(todo => {
        const listEl = document.createElement('li');
        // <li>태그는 display: list-item속성을 가짐 -> block요소와 비슷하게 자기 너비 전체를 차지함
        // 즉 width를 명시하지 않으면 부모 요소의 가로 영역 전체를 사용함
        listEl.textContent = todo.title;
        // 콘솔 찍어보면 list의 innerHTML속성이 todo.title로 설정된 거 확인할 수 있음 
        // listEl.innerHTML: HTML을 파싱하여 attribute까지 적용함
        // listEl.textContent: listEl 내부의 모든 자식 요소를 삭제하고, 새롭게 입력한 텍스트를 텍스트 그대로 렌더링 
        
        const deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.className = "deleteBtn";
        deleteEl.onclick = () => deleteTodo(todo.id);
        
        listEl.append(deleteEl);
        // listEl.textContent로 todo.title이 먼저 생성되고, 
        // 그 뒤에 append(deleteEl) 했으므로 deleteEl 버튼은 title의 오른쪽에 생성됨
        // 이때 자식(todo.title과 deleteEl 버튼) 사이에 자동으로 공백이 생성되는데, 
        // 텍스트 노드(Todo.title)와 인라인 요소(span태그로 생성된 deleteBtn) 둘 다 인라인 요소로 인식하므로
        // 브라우저가 인라인 요소 사이에 자동으로 공백을 부여함
        todoListEl.append(listEl);
    });
};

const addTodo = () => {
    const title = todoInputEl.value;
    // todoInputEl은 input 태그요소고, .value는 사용자가 input 필드에 입력한 텍스트 값을 가져오는 속성
    const createdAt = new Date().toDateString();
    const date = new Date(); // 중복되지 않는 id 생성을 위해 선언

    if (!title) return; // 아무것도 입력되지 않았을 때
    // !title은 title이 빈 문자열 또는 null, undefined, false, 0과 같이 falsy한 값인지 확인하는 조건
    // JS에서는 빈 문자열 "", Null 등이 falsy한 값으로 인식됨, isEmpty()같은 메서드 사용할 필요 X

    // db.json의 todos에 새로운 todo를 추가해야 함
    // => 해당 API 주소에 post요청을 보내면 됨

    const newTodo = {
        id: date.toISOString(),
        title: title,
        createdAt: createdAt,
    };

    fetch(API_URL, {
    // fetch의 두 번째 인자로 요청의 옵션이 담긴 객체를 전달하며,
    // 이 객체를 통해 HTTP 메서드, 헤더, 요청 본문 등을 설정할 수 있음
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...newTodo, completed: false }), // const newTodo에 completed: false를 추가해도..?
        // body: 서버로 전송할 실제 데이터
        // { ...newTodo, completed: false }: spread operator(...)으로 배열이나 객체를 펼쳐 내부 요소를 복사하고,
        // 거기에 completed: false라는 요소를 새로 추가함
        // JSON.stringify: 해당 데이터를 JSON 문자열로 변환함
    }) 
    .then((response) => response.json())
    // then: fetch가 성공적으로 POST요청을 보내고 서버의 응답이 돌아왔을 때 실행됨
    // response는 서버로부터 받은 응답 객체
    // POST요청이 성공하면 응답에는 새롭게 생성된 리소스의 상세 정보를 JSON객체로 반환함
    // 즉 새로운 todo를 생성하는 POST요청이 성공하면 요청에 보낸 그 todo가 JSON형태로 응답에 담겨 반환됨
    // JSON 서버의 기능
    .then((newTodo) => { 
        //newTodo: POST 요청의 결과로 서버에서 응답받은 새로운 todo 데이터
        todoInputEl.value = "";
        return fetch(API_URL);
        // 새로운 todo가 성공적으로 서버에 추가되었고, 전체 Todo 리스트를 가져오기 위해 GET요청을 보냄
        // 이 fetch요청도 Promise를 반환하므로 다음 then 체인에서 처리할 수 있음
        
        // +) 함수를 => 뒤에 { } 안에 작성해 재사용 없이 한 번만 호출함
    })
    .then((response) => response.json())
    .then((data) => renderTodo(data));

    // 아래 코드는 서버 요청 없이 todos 추가하는 코드
    // todos.push({
    //     id: date.toISOString(),
    //     title: title,
    //     createdAt: createdAt,
    // });
    // // push: JS에서 배열의 끝에 요소를 추가하는 메서드
    // // * append()는 DOM 조작 메서드로, HTML 요소나 텍스트를 부모 노드의 마지막 자식으로 추가함
    // // * push()는 JS의 배열 조작 메서드로, 배열의 끝에 새로운 요소를 추가함 +) JS에는 append() 없음

    // renderTodo(todos);
}

const deleteTodo = (todoId) => {
    fetch(API_URL + '/' + todoId, {
        method: "DELETE",
    })
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data) => renderTodo(data));

    // 아래 코드는 서버 요청 없이 todo 삭제하는 코드
    // const deletedTodo = todos.filter(todo => {
    //     return todo.id != todoId;
    //     // !=: 두 값이 서로 다르다면 true로 반환, 타입 변환은 자동으로 수행
    //     // !==: 타입과 값이 모두 다른 경우 true를 반환
    // });  

    // todos = deletedTodo;
    // renderTodo(todos);
};

// renderTodo(todos);


*/ 