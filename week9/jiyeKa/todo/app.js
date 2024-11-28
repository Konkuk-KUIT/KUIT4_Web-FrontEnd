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
var currentUpdateId = null;
document.getElementById("todoInput").focus();
var updateTodo = function (todoId, originalTitle) {
    // 이미 수정중인 항목이 있으면 다른 항목 ✏️ 클릭 불가능
    if (currentUpdateId != null && currentUpdateId != todoId)
        return;
    // 현재 수정중인 항목의 아이디 기록
    currentUpdateId = todoId;
    var todoItem = document.querySelector("#todo-".concat(todoId));
    // 기존 내용 삭제 후 input & SaveBtn 생성
    todoItem.innerHTML = "";
    var inputEl = document.createElement("input");
    inputEl.id = "inputEl";
    inputEl.type = "text";
    inputEl.value = originalTitle;
    var saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    // Button 스타일 변경
    saveBtn.style.cssText =
        "background-color: white; color: black; font-size: 0.7em; padding: 5px;";
    todoItem.appendChild(inputEl);
    todoItem.appendChild(saveBtn);
    // ✏️클릭 시 커서 위치 자동 포커스
    document.getElementById("inputEl").focus();
    // saveBtn 클릭 시 title 업데이트
    saveBtn.onclick = function () {
        var updatedTitle = inputEl.value;
        fetch(API_URL + "/" + todoId, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: updatedTitle }),
        })
            .then(function () {
            return fetch(API_URL);
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            renderTodo(data);
            currentUpdateId = null;
        });
    };
    // 엔터키 입력시 수정 Save 가능
    document.getElementById("inputEl").addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            saveBtn.onclick();
        }
    });
};
var renderTodo = function (newTodos) {
    todoListEl.innerHTML = "";
    newTodos.forEach(function (todo) {
        var listEl = document.createElement("li");
        listEl.textContent = todo.title;
        listEl.id = "todo-".concat(todo.id);
        var deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.onclick = function () { return deleteTodo(todo.id); };
        var updateEl = document.createElement("span");
        updateEl.textContent = "✏️";
        updateEl.onclick = function () { return updateTodo(todo.id, todo.title); };
        listEl.append(deleteEl);
        listEl.append(updateEl);
        todoListEl.append(listEl);
    });
};
// 엔터키 입력 시 add 가능하도록
document.getElementById("todoInput").addEventListener('keydown', function (event) {
    if (event.key == "Enter") {
        addTodo();
    }
});
var addTodo = function () {
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
