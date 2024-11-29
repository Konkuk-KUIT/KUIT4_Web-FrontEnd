var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");
const API_URL = "http://localhost:8080/todos";
// fetch(API_URL)
//   .then((response) => response.json() as Promise<Todo[]>)
//   .then((data: Todo[]) => renderTodo(data));
const fetchTodos = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch(API_URL);
    return yield response.json();
});
const updateTodo = (todoId, originalTitle) => __awaiter(this, void 0, void 0, function* () {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    if (!todoItem)
        return;
    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.value = originalTitle;
    const updateButton = document.createElement("button");
    updateButton.textContent = "수정";
    inputEl.focus();
    const updateButtonClicked = () => __awaiter(this, void 0, void 0, function* () {
        const updatedTitle = inputEl.value;
        yield fetch(`${API_URL}/${todoId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: updatedTitle }),
        });
        // .then((response) => response.json())
        // .then(() => fetch(API_URL))
        // .then((response) => response.json())
        // .then((data) => renderTodo(data));
        const todos = yield fetchTodos();
        renderTodo(todos);
        if (todoInputEl)
            todoInputEl.focus();
    });
    inputEl.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            updateButtonClicked();
        }
    });
    updateButton.onclick = updateButtonClicked;
    todoItem.innerHTML = "";
    todoItem.append(inputEl);
    todoItem.append(updateButton);
});
const renderTodo = (newTodos) => {
    if (!todoListEl)
        return;
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
    if (todoInputEl)
        todoInputEl.focus();
};
const addTodo = () => __awaiter(this, void 0, void 0, function* () {
    if (!todoInputEl)
        return;
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = date.toDateString();
    if (!title)
        return;
    const newTodo = {
        id: date.getTime(),
        title,
        createdAt,
    };
    yield fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.assign(Object.assign({}, newTodo), { completed: false })),
    });
    // .then((response) => response.json())
    // .then(() => {
    //   if(todoInputEl){
    //     (todoInputEl as HTMLInputElement).value = "";
    //   }
    //   return fetch(API_URL);
    // })
    // .then((response) => response.json())
    // .then((data: Todo[]) => renderTodo(data));
    if (todoInputEl)
        todoInputEl.value = "";
    const todos = yield fetchTodos();
    renderTodo(todos);
});
const deleteTodo = (todoId) => __awaiter(this, void 0, void 0, function* () {
    fetch(`${API_URL}/${todoId}`, {
        method: "DELETE",
    });
    // .then(() => fetch(API_URL))
    // .then((response) => response.json())
    // .then((data) => renderTodo(data));
    const todos = yield fetchTodos();
    renderTodo(todos);
});
if (todoInputEl) {
    todoInputEl.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
        if (todoInputEl)
            todoInputEl.focus();
    });
}
(() => __awaiter(this, void 0, void 0, function* () {
    const todos = yield fetchTodos();
    renderTodo(todos);
}))();
