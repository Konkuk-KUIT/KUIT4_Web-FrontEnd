const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

const updateTodo = (todoId, originalTitle) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  
  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.value = originalTitle;
  
  const updateButton = document.createElement("button");
  updateButton.textContent = "수정";

  inputEl.focus();
  
  const updateButtonClicked = () => {
    const updatedTitle = inputEl.value;

    fetch(API_URL + "/" + todoId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: updatedTitle }),
    })
      .then((response) => response.json())
      .then(() => fetch(API_URL))
      .then((response) => response.json())
      .then((data) => renderTodo(data));
      todoInputEl.focus();
  };

  inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      updateButtonClicked();
    }
  });

  updateButton.onclick = () => {
    updateButtonClicked();
  };

  todoItem.innerHTML = "";
  todoItem.append(inputEl);
  todoItem.append(updateButton);
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
  todoInputEl.focus();
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

todoInputEl.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
  todoInputEl.focus();
});