const todoInputEl = document.getElementById("todoInput");
const todoListEl = document.getElementById("todoList");

interface Todo {
  id: string;
  title: string;
  createdAt: string;
  completed: boolean;
}

const API_URL = "http://localhost:8080/todos";
fetch(API_URL)
  .then((response) => response.json())
  .then((data: Todo[]) => renderTodo(data));

const updateTodo = (todoId: string, originalTitle: string): void => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  if (!todoItem) return;

  const inputEl = document.createElement("input");
  inputEl.value = originalTitle;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => {
    const updatedTitle = inputEl.value;
    const date = new Date();
    const createdAt = date.toDateString();

    if (!updatedTitle) return;

    const updatedTodo = {
      id: date.getTime().toString(),
      title: updatedTitle,
      createdAt,
    };
      
    fetch(API_URL + "/" + todoId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...updatedTodo, completed: false}),
    })
      .then((response) => response.json())
      .then(() => {
        // todoInputEl.value = "";
        return fetch(API_URL);
      })
      .then((response) => response.json())
      .then((data) => renderTodo(data));
  };

  todoItem.innerHTML = "";
  todoItem.appendChild(inputEl);
  todoItem.appendChild(editBtn);
};

const renderTodo = (newTodos: Todo[]): void => {
  if (!todoListEl) return;
  todoListEl.innerHTML = "";

  newTodos.forEach((todo) => {
    const listEl = document.createElement("li");
    listEl.textContent = todo.title;
    listEl.id = `todo-${todo.id}`;

    const deleteEl = document.createElement("span");
    deleteEl.textContent = "❌";
    deleteEl.className = "deleteBtn";
    deleteEl.onclick = () => deleteTodo(todo.id);

    const udpateEl = document.createElement("span");
    udpateEl.textContent = "✏️";
    udpateEl.onclick = () => updateTodo(todo.id, todo.title);

    listEl.append(deleteEl);
    listEl.append(udpateEl);
    todoListEl.append(listEl);
  });
};

const addTodo = (): void => {
    if (!todoInputEl) return;

    const title = (todoInputEl as HTMLInputElement).value;
    const date = new Date();
    const createdAt: string = date.toDateString();

    if (!title) return;

    const newTodo: Omit<Todo, "completed"> = {
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
        if (todoInputEl) {
          (todoInputEl as HTMLInputElement).value = "";
        }
        return fetch(API_URL);
      })
      .then((response) => response.json())
      .then((data: Todo[]) => renderTodo(data));
};

const deleteTodo = (todoId: string): void => {
    fetch(API_URL + "/" + todoId, {
      method: "DELETE",
    })
      .then(() => fetch(API_URL))
      .then((response) => response.json())
      .then((data: Todo[]) => renderTodo(data));
};