const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

const updateTodo = (todoId, originalTitle) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  // mission
  // 기존 제목을 input 필드로 변경
  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.value = originalTitle;
  todoItem.textContent = "";  // 기존 텍스트 초기화
  todoItem.appendChild(inputEl);

  // 수정버튼
  const saveButton = document.createElement("span");
  saveButton.textContent = "Save";
  todoItem.appendChild(saveButton);

  // Save 버튼 클릭 시 title 수정 처리
  saveButton.onclick = () => {
    const newTitle = inputEl.value;  // input 필드에서 새 제목 가져오기
    fetch(API_URL + "/" + todoId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle }),  // 새 제목 서버에 전송
    })
      .then(() => fetch(API_URL))
      .then((response) => response.json())
      .then((data) => renderTodo(data));
  }
};

const renderTodo = (newTodos) => {
  todoListEl.innerHTML = "";
  newTodos.forEach((todo) => {
    const listEl = document.createElement("li");
    listEl.textContent = todo.title;
    listEl.id = `todo-${todo.id}`;

    const deleteEl = document.createElement("span");
    deleteEl.textContent = "Delete";
    deleteEl.onclick = () => deleteTodo(todo.id);

    const updateEl = document.createElement("span");
    updateEl.textContent = "Modify";
    updateEl.onclick = () => updateTodo(todo.id, todo.title);

    listEl.append(deleteEl);
    listEl.append(updateEl);
    todoListEl.append(listEl);
  });
};

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
