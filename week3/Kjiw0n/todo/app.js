const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
    .then((response) => response.json())
    .then((data) => renderTodo(data));

const updateTodo = async (todoId) => {
    const updateTitle = todoInputEl.value.trim();

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

        const response = await fetch(API_URL);
        const data = await response.json();

        renderTodo(data);
    } catch (error) {
        console.error("Error updating todo:", error);
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
            todoInputEl.value = "";
            return fetch(API_URL);
        })
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};

const deleteTodo = async (todoId) => {
    if (!todoId) {
        console.error("Invalid todoId");
        return;
    }

    try {
        await fetch(API_URL + "/" + todoId, {
            method: "DELETE",
        });

        const response = await fetch(API_URL);
        const data = await response.json();
        renderTodo(data);
    } catch (error) {
        console.error("Error deleting todo:", error);
    }
};
