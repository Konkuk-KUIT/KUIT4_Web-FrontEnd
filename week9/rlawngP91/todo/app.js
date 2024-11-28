const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");
const API_URL = "http://localhost:8080/todos";
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => renderTodo(data));
const updateTodo = (todoId, originalTitle) => {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    if (!todoItem)
        return;
    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.value = originalTitle;
    todoItem.textContent = "";
    todoItem.appendChild(inputEl);
    const saveButton = document.createElement("span");
    saveButton.textContent = "Save";
    todoItem.appendChild(saveButton);
    saveButton.onclick = () => {
        const newTitle = inputEl.value;
        fetch(`${API_URL}/${todoId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: newTitle }),
        })
            .then(() => fetch(API_URL))
            .then((response) => response.json())
            .then((data) => renderTodo(data));
    };
};
const renderTodo = (newTodos) => {
    if (!todoListEl)
        return;
    todoListEl.innerHTML = "";
    newTodos.forEach((todo) => {
        const listEl = document.createElement("li");
        listEl.textContent = todo.title;
        listEl.id = `todo-${todo.id}`;
        const deleteEl = document.createElement("span");
        deleteEl.textContent = "Delete";
        deleteEl.onclick = () => deleteTodo(todo.id);
        const updateEl = document.createElement("span");
        updateEl.textContent = "Modify";
        updateEl.onclick = () => updateTodo(todo.id, todo.title);
        listEl.append(deleteEl);
        listEl.append(updateEl);
        todoListEl.append(listEl);
    });
};
const addTodo = () => {
    if (!todoInputEl)
        return;
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = date.toDateString();
    if (!title)
        return;
    const newTodo = {
        id: date.getTime().toString(),
        title,
        createdAt,
        completed: false
    };
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
    })
        .then((response) => response.json())
        .then(() => {
        if (todoInputEl) {
            todoInputEl.value = "";
        }
        return fetch(API_URL);
    })
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};
const deleteTodo = (todoId) => {
    fetch(`${API_URL}/${todoId}`, {
        method: "DELETE",
    })
        .then(() => fetch(API_URL))
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};
