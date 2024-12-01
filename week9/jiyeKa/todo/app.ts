const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

interface Todo {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
}

fetch(API_URL)
  .then((response) => response.json())
  .then((data: Todo[]) => renderTodo(data)); // todo 배열 받아줘야 any 안뜸
let currentUpdateId: number | null;
currentUpdateId=null;
// document.getElementById("todoInput").focus();
(todoInputEl as HTMLInputElement).focus();

const updateTodo = (todoId: number, originalTitle: string): void => {

  // 이미 수정중인 항목이 있으면 다른 항목 ✏️ 클릭 불가능
  if(currentUpdateId!=null && currentUpdateId!=todoId) return;
  
  // 현재 수정중인 항목의 아이디 기록
  currentUpdateId=todoId; // 유니온 타입 선언 -> number할당 가능
  const todoItem = document.querySelector(`#todo-${todoId}`);

  // 기존 내용 삭제 후 input & SaveBtn 생성
  // todoItem.innerHTML = "";
  (todoItem as HTMLInputElement).innerHTML = "";

  const inputEl = document.createElement("input");
  inputEl.id="inputEl";
  inputEl.type = "text";
  inputEl.value = originalTitle;
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";

  // Button 스타일 변경
  saveBtn.style.cssText = 
  "background-color: white; color: black; font-size: 0.7em; padding: 5px;";
  
  (todoItem as HTMLInputElement).appendChild(inputEl);
  (todoItem as HTMLInputElement).appendChild(saveBtn);

  // ✏️클릭 시 커서 위치 자동 포커스
  (document.getElementById("inputEl") as HTMLInputElement).focus();

  // saveBtn 클릭 시 title 업데이트
  const handelClick = () => {
    const updatedTitle = inputEl.value;

    fetch(API_URL + "/" + todoId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: updatedTitle }),
    })
    .then(() => {
      return fetch(API_URL);
    })
    .then((response) => response.json())
    .then((data) => { 
      renderTodo(data);
      currentUpdateId=null;
    });
  };

  saveBtn.onclick = handelClick;
  // 엔터키 입력시 수정 Save 가능
  (document.getElementById("inputEl") as HTMLInputElement).addEventListener('keydown',function(event){
    if(event.key === 'Enter'){
      handelClick();
    }
  });
};

const renderTodo = (newTodos: Todo[]): void => {
  if(!todoListEl) return; // 타입 좁히기
  todoListEl.innerHTML = "";
  newTodos.forEach((todo) => {
    const listEl = document.createElement("li");
    listEl.textContent = todo.title;
    listEl.id = `todo-${todo.id}`;

    const deleteEl = document.createElement("span");
    deleteEl.textContent = "🗑️";
    deleteEl.onclick = () => deleteTodo(todo.id);

    const updateEl = document.createElement("span");
    updateEl.textContent = "✏️";
    updateEl.onclick = () => updateTodo(todo.id, todo.title);

    listEl.append(deleteEl);
    listEl.append(updateEl);
    todoListEl.append(listEl);
  });
};

// 엔터키 입력 시 add 가능하도록
(todoInputEl as HTMLInputElement).addEventListener('keydown',function(event){
  if(event.key == "Enter"){
    addTodo();
  }
});

const addTodo = (): void => {
  if(!todoInputEl) return;
  const title = (todoInputEl as HTMLInputElement).value;
  const date = new Date();
  const createdAt:string = date.toDateString();

  if (!title) return;

  const newTodo: Omit<Todo, "completed"> = {
    id: date.getTime(),
    title,
    createdAt 
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
      if(todoInputEl){
        (todoInputEl as HTMLInputElement).value="";
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
    .then((data) => renderTodo(data));
};
