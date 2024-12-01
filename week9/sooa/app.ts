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
  .then((data: Todo[]) => renderTodo(data));

const updateTodo = (todoId: number, originalTitle: string): void => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  if (!todoItem) return;

  const titleEl = todoItem.querySelector("span");
  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.value = originalTitle;

  (titleEl as HTMLInputElement).replaceWith(inputEl);
  inputEl.focus();

  inputEl.onkeydown = (e) => {
    if (e.key == "Enter") {
      const newTitle = inputEl.value;

      if (!newTitle) {
        inputEl.replaceWith(titleEl as HTMLInputElement);
        return;
      }
      fetch(API_URL + "/" + todoId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle }),
      })
        .then(() => fetch(API_URL))
        .then((response) => response.json())
        .then((data) => renderTodo(data));
    }
  };
};

const renderTodo = (newTodos: Todo[]): void => {
  if (!todoListEl) return;
  todoListEl.innerHTML = "";
  newTodos.forEach((todo) => {
    const listEl = document.createElement("li");
    listEl.textContent = todo.title;
    listEl.id = `todo-${todo.id}`;

    const deleteEl = document.createElement("span");
    deleteEl.textContent = "🗑️";
    deleteEl.classList.add("pointer-style");
    deleteEl.onclick = () => deleteTodo(todo.id);

    const updateEl = document.createElement("span");
    updateEl.classList.add("pointer-style");
    updateEl.textContent = "✏️";
    updateEl.onclick = () => updateTodo(todo.id, todo.title);

    listEl.append(deleteEl);
    listEl.append(updateEl);
    todoListEl.append(listEl);
  });
};

const addTodo = (): void => {
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
      (todoInputEl as HTMLInputElement).value = "";
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
