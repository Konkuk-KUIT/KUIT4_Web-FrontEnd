const todoInputEl = document.getElementById("todoInput");
const todoListEl = document.getElementById("todoList");

const API_URL = "http://localhost:8080/todos";
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => renderTodo(data));

const updateTodo = (todoId, originalTitle) => {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    // mission
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
        
        fetch(API_URL+"/"+todoId, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...updatedTodo, completed: false}),
        })
            .then((response) => response.json())
            .then(() => {
                todoInputEl.value = "";
                return fetch(API_URL);
            })
            .then((response) => response.json())
            .then((data) => renderTodo(data));
    };

    todoItem.innerHTML = "";
    todoItem.appendChild(inputEl);
    todoItem.appendChild(editBtn);
};

const renderTodo = (newTodos) => {
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

const addTodo = () => {
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = date.toDateString();

    if (!title) return;

    const newTodo = {
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
            todoInputEl.value = "";
            return fetch(API_URL);
        })
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};

const deleteTodo = (todoId) => {
    fetch(API_URL+"/"+todoId, {
        method: "DELETE",
    })
        .then(() => fetch(API_URL))
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};