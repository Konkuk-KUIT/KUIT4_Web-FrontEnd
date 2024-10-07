const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

let currentUpdateId = null;
document.getElementById("todoInput").focus();

const updateTodo = (todoId, originalTitle) => {

  // 이미 수정중인 항목이 있으면 다른 항목 ✏️ 클릭 불가능
  if(currentUpdateId!=null && currentUpdateId!=todoId) return;
  
  // 현재 수정중인 항목의 아이디 기록
  currentUpdateId=todoId;
  const todoItem = document.querySelector(`#todo-${todoId}`);

  // 기존 내용 삭제 후 input & SaveBtn 생성
  todoItem.innerHTML = "";

  const inputEl = document.createElement("input");
  inputEl.id="inputEl";
  inputEl.type = "text";
  inputEl.value = originalTitle;
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";

  // Button 스타일 변경
  saveBtn.style.cssText = 
  "background-color: white; color: black; font-size: 0.7em; padding: 5px;";
  
  todoItem.appendChild(inputEl);
  todoItem.appendChild(saveBtn);

  // ✏️클릭 시 커서 위치 자동 포커스
  document.getElementById("inputEl").focus();

  // saveBtn 클릭 시 title 업데이트
  saveBtn.onclick = () => {
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

  // 엔터키 입력시 수정 Save 가능
  document.getElementById("inputEl").addEventListener('keydown',function(event){
    if(event.key === 'Enter'){
      saveBtn.onclick();
    }
  });
  
};

const renderTodo = (newTodos) => {
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
document.getElementById("todoInput").addEventListener('keydown',function(event){
  if(event.key == "Enter"){
    addTodo();
  }
});


const addTodo = () => {
  const title = todoInputEl.value;
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
      todoInputEl.value = "";
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
