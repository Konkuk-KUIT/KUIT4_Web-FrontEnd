const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:3000/todos";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data))
  .catch((error) => console.log("error: " + error));

const fetchTodos = async () => {
  const response = await fetch(API_URL);
  return await response.json();
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
      return fetchTodos();
    })
    .then((data) => renderTodo(data));
};
const deleteTodo = (todoId) => {
  console.log(todoId);
  fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })
    .then(() => fetchTodos())
    .then((data) => renderTodo(data));
};

const updateTodo = (todoId, title) => {
  //id에 해당하는 아이템 불러옴
  const todoItem = document.querySelector(`#todo-${todoId}`);
  //input으로 변경
  todoItem.innerHTML = "";
  const updateInput = document.createElement("input");
  updateInput.type = "text";
  updateInput.value = title;
  todoItem.append(updateInput);

  const updateTodoItem = (event) => {
    if (event.key == "Enter") {
      upDateToDoTitle(todoId, updateInput.value)
        .then(() => {
          todoItem.innerHTML = "";
          return fetchTodos();
        })
        .then((data) => renderTodo(data))
        .catch((error) => {
          console.log("error: ", error);
        });
    }
  };

  updateInput.onkeydown = updateTodoItem;
};

//DB 수정
const upDateToDoTitle = (todoId, newTitle) => {
  return fetch(API_URL + "/" + todoId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: newTitle,
    }),
  });
};
