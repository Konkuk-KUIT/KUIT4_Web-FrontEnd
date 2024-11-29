const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

interface Todo {
  id: string;
  title: string;
  createdAt: string;
  completed: boolean;
}

const API_URL = "http://localhost:8080/todos";

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

window.addEventListener(
  "load",
  async () => {
    const newTodos = await fetchTodos();
    renderTodo(newTodos);
  },
  false
);

const updateTodo = async (todoId: number): Promise<void> => {
  const updateTitle = (todoInputEl as HTMLInputElement).value.trim();

  if (!todoId || !updateTitle) {
    console.error("Invalid todoId or empty title");
    return;
  }

  try {
    await fetch(API_URL + "/" + todoId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: updateTitle }),
    });

    const newTodos = await fetchTodos();
    renderTodo(newTodos);
  } catch (error) {
    console.error("Error updating todo:", error);
  }
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
    deleteEl.onclick = () => deleteTodo(Number(todo.id));

    const udpateEl = document.createElement("span");
    udpateEl.textContent = "✏️";
    udpateEl.onclick = () => updateTodo(Number(todo.id));

    listEl.append(deleteEl);
    listEl.append(udpateEl);
    todoListEl?.append(listEl);
  });
};

const addTodo = async () => {
  const title = (todoInputEl as HTMLInputElement).value;
  const date = new Date();
  const createdAt = date.toDateString();

  if (!title) return;

  const newTodo = {
    id: date.getTime(),
    title,
    createdAt,
  };

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newTodo, completed: false }),
    });

    const newTodos = await fetchTodos();
    renderTodo(newTodos);
    (todoInputEl as HTMLInputElement).value = "";
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

const deleteTodo = async (todoId: number) => {
  if (!todoId) {
    console.error("Invalid todoId");
    return;
  }

  try {
    await fetch(API_URL + "/" + todoId, {
      method: "DELETE",
    });

    const newTodos = await fetchTodos();
    renderTodo(newTodos);
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};
