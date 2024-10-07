const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
  .then((response) => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then((data) => renderTodo(data))
  .catch((error) => {
    console.error("Error fetching todos:", error);
    todoListEl.innerHTML = "<li>Failed to load todos. Please check your server connection.</li>";
  });

const updateTodo = (todoId, originalTitle) => {
  const newTitle = prompt("Enter new title for the todo:", originalTitle);
  
  if (newTitle !== null && newTitle !== originalTitle) {
    fetch(`${API_URL}/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(() => fetch(API_URL))
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => renderTodo(data))
      .catch((error) => {
        console.error("Error updating todo:", error);
        alert("Failed to update todo. Please try again.");
      });
  }
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

    const updateEl = document.createElement("span"); // 오타 수정: udpateEl -> updateEl
    updateEl.textContent = "✏️";
    updateEl.onclick = () => updateTodo(todo.id, todo.title);

    listEl.append(deleteEl);
    listEl.append(updateEl);
    todoListEl.append(listEl);
  });
};

const addTodo = () => {
  const title = todoInputEl.value.trim(); // 앞뒤 공백 제거
  if (!title) return; // 빈 문자열 체크

  const date = new Date();
  const newTodo = {
    id: date.getTime().toString(),
    title,
    createdAt: date.toDateString(),
    completed: false
  };

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  })
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(() => {
      todoInputEl.value = "";
      return fetch(API_URL);
    })
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then((data) => renderTodo(data))
    .catch((error) => {
      console.error("Error adding todo:", error);
      alert("Failed to add todo. Please try again.");
    });
};

const deleteTodo = (todoId) => {
  fetch(`${API_URL}/${todoId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok');
      return fetch(API_URL);
    })
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then((data) => renderTodo(data))
    .catch((error) => {
      console.error("Error deleting todo:", error);
      alert("Failed to delete todo. Please try again.");
    });
};