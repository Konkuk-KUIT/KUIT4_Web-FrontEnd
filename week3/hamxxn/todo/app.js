const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:3000/todos";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data))
  .catch((error) => console.log("error: " + error));

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
    title,
    createdAt,
    completed: false,
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
  console.log(todoId);
  fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};
//연필 이모지 누르면 input으로 바뀌고 enter 누르면 바뀜
const updateTodo = (todoId, originalTitle) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);

  const updateInput = document.createElement("input");
  updateInput.type = "text";
  updateInput.value = originalTitle;
  todoItem.innerHTML = "";

  todoItem.append(updateInput);
  updateInput.onkeydown = () => {
    console.log("inner");
    if (event.key == "Enter") {
      fetch(API_URL + "/" + todoId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: updateInput.value,
        }),
      })
        .then(() => {
          todoItem.innerHTML = "";
          return fetch(API_URL);
        })
        .then((response) => response.json())
        .then((data) => renderTodo(data));
    }
  };
};
