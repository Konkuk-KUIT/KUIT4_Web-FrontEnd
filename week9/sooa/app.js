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
var todoListEl = document.getElementById("todoList");
var todoInputEl = document.getElementById("todoInput");
var API_URL = "http://localhost:8080/todos";
fetch(API_URL)
    .then(function (response) { return response.json(); })
    .then(function (data) { return renderTodo(data); });
var updateTodo = function (todoId, originalTitle) {
    var todoItem = document.querySelector("#todo-".concat(todoId));
    if (!todoItem)
        return;
    var titleEl = todoItem.querySelector("span");
    var inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.value = originalTitle;
    titleEl.replaceWith(inputEl);
    inputEl.focus();
    inputEl.onkeydown = function (e) {
        if (e.key == "Enter") {
            var newTitle = inputEl.value;
            if (!newTitle) {
                inputEl.replaceWith(titleEl);
                return;
            }
            fetch(API_URL + "/" + todoId, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title: newTitle }),
            })
                .then(function () { return fetch(API_URL); })
                .then(function (response) { return response.json(); })
                .then(function (data) { return renderTodo(data); });
        }
    };
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
        deleteEl.textContent = "🗑️";
        deleteEl.classList.add("pointer-style");
        deleteEl.onclick = function () { return deleteTodo(todo.id); };
        var updateEl = document.createElement("span");
        updateEl.classList.add("pointer-style");
        updateEl.textContent = "✏️";
        updateEl.onclick = function () { return updateTodo(todo.id, todo.title); };
        listEl.append(deleteEl);
        listEl.append(updateEl);
        todoListEl.append(listEl);
    });
};
var addTodo = function () {
    var title = todoInputEl.value;
    var date = new Date();
    var createdAt = date.toDateString();
    if (!title)
        return;
    var newTodo = {
        id: date.getTime(),
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
        todoInputEl.value = "";
        return fetch(API_URL);
    })
        .then(function (response) { return response.json(); })
        .then(function (data) { return renderTodo(data); });
};
var deleteTodo = function (todoId) {
    fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    })
        .then(function () { return fetch(API_URL); })
        .then(function (response) { return response.json(); })
        .then(function (data) { return renderTodo(data); });
};
