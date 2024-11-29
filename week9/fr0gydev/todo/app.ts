interface Todo {
  id: string;
  title: string;
  createdAt: string;
  completed: boolean;
}

// as 키워드로 타입 단언(Type assertion)을 사용하여 더 구체적인 타입을 지정
const todoListEl = document.getElementById("todoList") as HTMLUListElement;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement;

// DOM 요소가 존재하지 않을 경우를 대비한 null 체크
// TypeScript의 null 체크를 통과하기 위해 필요
if (!todoListEl || !todoInputEl) {
  throw new Error("Required DOM elements not found");
}

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
  .then((response) => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then((data: Todo[]) => renderTodo(data))
  .catch((error) => {
    console.error("Error fetching todos:", error);
    todoListEl.innerHTML = "<li>Failed to load todos. Please check your server connection.</li>";
  });

const updateTodo = (todoId: string, originalTitle: string): void => {
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
      .then((data: Todo[]) => renderTodo(data))
      .catch((error) => {
        console.error("Error updating todo:", error);
        alert("Failed to update todo. Please try again.");
      });
  }
};

const renderTodo = (newTodos: Todo[]): void => {
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

const addTodo = (): void => {
  const title = todoInputEl.value.trim(); // 앞뒤 공백 제거
  if (!title) return; // 빈 문자열 체크

  const date = new Date();
  const newTodo: Todo = {
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
    .then((data: Todo[]) => renderTodo(data))
    .catch((error) => {
      console.error("Error adding todo:", error);
      alert("Failed to add todo. Please try again.");
    });
};

const deleteTodo = (todoId: string): void => {
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
    .then((data: Todo[]) => renderTodo(data))
    .catch((error) => {
      console.error("Error deleting todo:", error);
      alert("Failed to delete todo. Please try again.");
    });
};