const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

const updateTodo = (todoId, originalTitle) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  
  const todoInput= document.querySelector('#todoInput');
  const title =todoInput.value;
  // mission
  // const changedItem =todoItem.title;
  // originalTitle = changedItem;
  // 그냥 값 바꾸는것만으로는 안 바껴서 아마 delete처럼 fetch를 또 해야하는듯?
  //는 생각해보니까 ADD버튼 눌러서 INPUT필드 열어서 고치면 새로 생성되는건데 여기에 원래의 add+수정기능을 합치지말고, 
  // 연필버튼 클릭하면 해당 to-do의 title란이 input필드로 바뀌어서,직접 원하는 todo의 title필드 열어서 고치고 fetch로 정보 전송하는게?

  const updatedTodo = {
    title
  };

    fetch(`${API_URL}/${todoId}`, { //특정 todo url로 put 요청해야 동작함
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...updatedTodo, completed: false }),
    })
      .then((response) => response.json())
      .then(() => {
        todoInputEl.value = "";
        return fetch(API_URL);
      })
      .then((response) => response.json())
      .then((data) => renderTodo(data));
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

    const udpateEl = document.createElement("span");
    udpateEl.textContent = "✏️";
    udpateEl.onclick = () => updateTodo(todo.id, todo.title);

    listEl.append(deleteEl);
    listEl.append(udpateEl);
    todoListEl.append(listEl);
  });
};

const addTodo = () => {
  const title = todoInputEl.value;
  const date = new Date();
  const createdAt = date.toDateString();

  if (!title) return;

  const newTodo = {
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
