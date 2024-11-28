const todoListEl = document.getElementById("todoList") as HTMLUListElement | null;
const todoInputEl = document.getElementById("todoInput") as HTMLInputElement | null;

const API_URL = "http://localhost:8080/todos";

interface Todo {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
}

fetch(API_URL)
  .then((response) => response.json() as Promise<Todo[]>)
  .then((data: Todo[]) => renderTodo(data));

const updateTodo = (todoId: number, originalTitle: string): void => {
  const todoItem = document.querySelector(`#todo-${todoId}`) as HTMLElement | null;
  if(!todoItem) return;
  
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
    if(!todoInputEl) return;
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

const renderTodo = (newTodos: Todo[]): void => {
  if(!todoListEl) return;

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
  if(!todoInputEl) return;
  todoInputEl.focus();
};

const addTodo = ():void => {
  if(!todoInputEl) return;
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
      if(todoInputEl){
        (todoInputEl as HTMLInputElement).value = "";
      }
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
    .then((data) => renderTodo(data));
};

if(todoInputEl){
  todoInputEl.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      addTodo();
    }
    if(!todoInputEl) return;
    todoInputEl.focus();
  });
}