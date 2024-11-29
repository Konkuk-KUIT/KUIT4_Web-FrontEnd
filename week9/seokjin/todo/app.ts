export const todoListEl = document.getElementById("todoList");
export const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

interface Todo {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
}

fetch(API_URL)
  .then((response) => response.json())
  .then((data: Todo[]) => renderTodo(data));

const updateTodo = (todoId: number, originalTitle: string): void => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  // mission
  //여기부터
  // 기존의 제목을 숨기고 입력 창을 생성
  if(!todoItem) return;
  todoItem.innerHTML = ""; // 리스트 요소 초기화
  
  const inputEl = document.createElement("input");
  inputEl.value = originalTitle; // 원래 제목으로 초기화
  inputEl.classList.add("edit-input"); // 스타일을 위해 클래스 추가

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save"; // 저장 버튼 생성

  // 저장 버튼 클릭 시
  saveBtn.onclick = () => {
  const updatedTitle = inputEl.value; // 입력된 값 가져오기

  // Fetch 요청으로 서버의 데이터를 업데이트
  fetch(`${API_URL}/${todoId}`, {
      method: "PUT", // PUT 메소드 사용
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: updatedTitle }), // 업데이트된 제목
    })
      .then((response) => response.json())
      .then(() => fetch(API_URL))
        /*{
         // 업데이트 후 리스트를 다시 렌더링
        return fetch(API_URL);
      }) */ 
      .then((response) => response.json())
      .then((data: Todo[]) => renderTodo(data));
  };

   // 리스트 항목에 입력 요소와 저장 버튼 추가
  todoItem.appendChild(inputEl);
  todoItem.appendChild(saveBtn);

  //여기까지
  // ✏️ << 연필아이콘
  //editEL 만들어서 수정버튼(연필아이콘)을 누르면 
  //연필 눌렀을때 input 할 수 있도록 간단한 텍스트입력 창이라든가 그런게 뜨게 하고 사용자가 문자열을 입력하고 엔터 혹은 빈 공간을 클릭했을때 기존의 값은 바뀌고 사용자가 입력한 값으로 변경이 되도록.
  // fetch 사용한거 참고해서 구현
};

const renderTodo = (newTodos: Todo[]): void => {
  if(!todoListEl) return;
  todoListEl.innerHTML = "";
  newTodos.forEach((todo) => {
    const listEl = document.createElement("li");
    listEl.textContent = todo.title;
    listEl.id = `todo-${todo.id}`;

    const deleteEl = document.createElement("span");
    deleteEl.textContent = "🗑️";
    deleteEl.onclick = () => deleteTodo(todo.id);

    const udpateEl = document.createElement("span");
    udpateEl.textContent = "✏️";
    udpateEl.onclick = () => updateTodo(todo.id, todo.title);

    listEl.append(deleteEl);
    listEl.append(udpateEl);
    todoListEl.append(listEl);
  });
};

export const addTodo = (): void => {
  if(!todoInputEl) return;
  const title = (todoInputEl as HTMLInputElement).value;
  const date = new Date();
  const createdAt = date.toDateString();

  if (!title) return;

  const newTodo: Omit<Todo, "completed"> = {
    id: date.getTime(),
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
      if(todoInputEl) {
        (todoInputEl as HTMLInputElement).value = "";
      }
      return fetch(API_URL);
    })
    .then((response) => response.json())
    .then((data: Todo[]) => renderTodo(data));
};

const deleteTodo = (todoId: number): void => {
  fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data: Todo[]) => renderTodo(data));
};

(window as any).addTodo = addTodo;