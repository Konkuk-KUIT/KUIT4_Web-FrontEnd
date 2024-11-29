// import { LargeNumberLike } from "crypto";
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
var updateTodo = function (todo) {
    // const todoItem = document.querySelector(`#todo-${todoId}`);
    // const todoInput= document.querySelector('#todoInput');
    var updatetitle = prompt("수정할 이름을 입력해주세요");
    // mission
    // const changedItem =todoItem.title;
    // originalTitle = changedItem;
    alert(updatetitle);
    // const updatedTodo = { ...todo, title: updatetitle };
    var updatedTodo = {
        id: todo.id,
        title: updatetitle,
        createdAt: todo.createdAt,
        completed: todo.completed,
    };
    // //alert로는 값 잘 저장되는거 출력 잘되는데????? 왜 
    //꼭....쿠잇 공지방을 잘 보도록하자...
    // if(updatetitle == null){
    //   console.log("오류ㅎㅇ");
    //   return;
    // }
    // const updatedTodo = {
    //   title
    // };
    fetch(API_URL + "/" + todo.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
    })
        .then(function (response) { return response.json(); })
        .then(function () {
        todoInputEl.value = "";
        return fetch(API_URL);
    })
        .then(function (response) { return response.json(); })
        .then(function (data) { return renderTodo(data); });
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
        deleteEl.onclick = function () { return deleteTodo(todo.id); };
        var udpateEl = document.createElement("span");
        udpateEl.textContent = "✏️";
        udpateEl.onclick = function () { return updateTodo(todo); };
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
    var idid = date.getTime.toString();
    var newTodo = {
        // id: date.getTime().toString(), number타입으로 고정되서 tosring xx
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
