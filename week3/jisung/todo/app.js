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
    /*
    todos.push({
        id: date.toISOString(),
        title: title,
        createdAt: createdAt,
    });
    // push: JS에서 배열의 끝에 요소를 추가하는 메서드
    // * append()는 DOM 조작 메서드로, HTML 요소나 텍스트를 부모 노드의 마지막 자식으로 추가함
    // * push()는 JS의 배열 조작 메서드로, 배열의 끝에 새로운 요소를 추가함 +) JS에는 append() 없음

    renderTodo(todos);
    */
}

const deleteTodo = (todoId) => {
    fetch(API_URL + '/' + todoId, {
        method: "DELETE",
    })
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data) => renderTodo(data));

    // 아래 코드는 서버 요청 없이 todo 삭제하는 코드
    /*
    const deletedTodo = todos.filter(todo => {
        return todo.id != todoId;
        // !=: 두 값이 서로 다르다면 true로 반환, 타입 변환은 자동으로 수행
        // !==: 타입과 값이 모두 다른 경우 true를 반환
    });  

    todos = deletedTodo;
    renderTodo(todos);
    */
};

// renderTodo(todos);