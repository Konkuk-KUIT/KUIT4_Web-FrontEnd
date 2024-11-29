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
const fetchTodos = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch(API_URL);
    const data = yield response.json();
    return data;
});
window.addEventListener("load", () => __awaiter(this, void 0, void 0, function* () {
    const newTodos = yield fetchTodos();
    renderTodo(newTodos);
}), false);
const updateTodo = (todoId) => __awaiter(this, void 0, void 0, function* () {
    const updateTitle = todoInputEl.value.trim();
    if (!todoId || !updateTitle) {
        console.error("Invalid todoId or empty title");
        return;
    }
    try {
        yield fetch(API_URL + "/" + todoId, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: updateTitle }),
        });
        const newTodos = yield fetchTodos();
        renderTodo(newTodos);
    }
    catch (error) {
        console.error("Error updating todo:", error);
    }
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
        deleteEl.onclick = () => deleteTodo(Number(todo.id));
        const udpateEl = document.createElement("span");
        udpateEl.textContent = "✏️";
        udpateEl.onclick = () => updateTodo(Number(todo.id));
        listEl.append(deleteEl);
        listEl.append(udpateEl);
        todoListEl === null || todoListEl === void 0 ? void 0 : todoListEl.append(listEl);
    });
};
const addTodo = () => __awaiter(this, void 0, void 0, function* () {
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
    try {
        yield fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Object.assign(Object.assign({}, newTodo), { completed: false })),
        });
        const newTodos = yield fetchTodos();
        renderTodo(newTodos);
        todoInputEl.value = "";
    }
    catch (error) {
        console.error("Error adding todo:", error);
    }
});
const deleteTodo = (todoId) => __awaiter(this, void 0, void 0, function* () {
    if (!todoId) {
        console.error("Invalid todoId");
        return;
    }
    try {
        yield fetch(API_URL + "/" + todoId, {
            method: "DELETE",
        });
        const newTodos = yield fetchTodos();
        renderTodo(newTodos);
    }
    catch (error) {
        console.error("Error deleting todo:", error);
    }
});
