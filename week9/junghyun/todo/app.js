var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todoInputEl = document.getElementById("todoInput");
var todoListEl = document.getElementById("todoList");
var API_URL = "http://localhost:8080/todos";
fetch(API_URL)
    .then(function (response) { return response.json(); })
    .then(function (data) { return renderTodo(data); });
var updateTodo = function (todoId, originalTitle) {
    var todoItem = document.querySelector("#todo-".concat(todoId));
    if (!todoItem)
        return;
    var inputEl = document.createElement("input");
    inputEl.value = originalTitle;
    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
        var updatedTitle = inputEl.value;
        var date = new Date();
        var createdAt = date.toDateString();
        if (!updatedTitle)
            return;
        var updatedTodo = {
            id: date.getTime().toString(),
            title: updatedTitle,
            createdAt: createdAt,
        };
        fetch(API_URL + "/" + todoId, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(__assign(__assign({}, updatedTodo), { completed: false })),
        })
            .then(function (response) { return response.json(); })
            .then(function () {
            // todoInputEl.value = "";
            return fetch(API_URL);
        })
            .then(function (response) { return response.json(); })
            .then(function (data) { return renderTodo(data); });
    };
    todoItem.innerHTML = "";
    todoItem.appendChild(inputEl);
    todoItem.appendChild(editBtn);
};
var renderTodo = function (newTodos) {
    if (!todoListEl)
        return;
    todoListEl.innerHTML = "";
    newTodos.forEach(function (todo) {
        var listEl = document.createElement("li");
        listEl.textContent = todo.title;
        listEl.id = "todo-".concat(todo.id);
        var deleteEl = document.createElement("span");
        deleteEl.textContent = "❌";
        deleteEl.className = "deleteBtn";
        deleteEl.onclick = function () { return deleteTodo(todo.id); };
        var udpateEl = document.createElement("span");
        udpateEl.textContent = "✏️";
        udpateEl.onclick = function () { return updateTodo(todo.id, todo.title); };
        listEl.append(deleteEl);
        listEl.append(udpateEl);
        todoListEl.append(listEl);
    });
};
var addTodo = function () {
    if (!todoInputEl)
        return;
    var title = todoInputEl.value;
    var date = new Date();
    var createdAt = date.toDateString();
    if (!title)
        return;
    var newTodo = {
        id: date.getTime().toString(),
        title: title,
        createdAt: createdAt,
    };
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(__assign(__assign({}, newTodo), { completed: false })),
    })
        .then(function (response) { return response.json(); })
        .then(function () {
        if (todoInputEl) {
            todoInputEl.value = "";
        }
        return fetch(API_URL);
    })
        .then(function (response) { return response.json(); })
        .then(function (data) { return renderTodo(data); });
};
var deleteTodo = function (todoId) {
    console.log(todoId);
    fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    })
        .then(function () { return fetch(API_URL); })
        .then(function (response) { return response.json(); })
        .then(function (data) { return renderTodo(data); });
};
