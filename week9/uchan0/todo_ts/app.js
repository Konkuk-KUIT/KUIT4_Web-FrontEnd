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
        deleteEl.className = "deleteBtn";
        deleteEl.onclick = function () { return deleteTodo(todo.id); };
        var updateEl = document.createElement("span");
        updateEl.textContent = "✏️";
        deleteEl.className = "updateBtn";
        updateEl.onclick = function () { return updateTodo(todo.id, todo.title); };
        listEl.append(deleteEl);
        listEl.append(updateEl);
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
        id: date.getTime(),
        title: title,
        createdAt: createdAt,
    };
    // const newTodo: Todo = {
    //   id: date.getTime(),
    //   title,
    //   createdAt,
    //   completed: false,
    // };
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(__assign(__assign({}, newTodo), { completed: false })),
    })
        .then(function (response) { return response.json(); })
        .then(function () {
        // 최신 목록을 다시 가져와서 렌더링
        if (todoInputEl) {
            todoInputEl.value = "";
        }
        return fetch(API_URL);
    })
        .then(function (response) { return response.json(); })
        .then(function (data) { return renderTodo(data); });
};
var deleteTodo = function (todoId) {
    fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    })
        // 최신 목록을 다시 가져와서 렌더링
        .then(function () { return fetch(API_URL); })
        .then(function (response) { return response.json(); })
        .then(function (data) { return renderTodo(data); });
};
//mission
var updateTodo = function (todoId, originalTitle) {
    var todoItem = document.querySelector("#todo-".concat(todoId));
    if (!todoItem)
        return;
    //form 태그 생성
    var formEl = document.createElement("form");
    // 입력창 생성
    var inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.value = "";
    // 확인버튼 생성
    var confirmBtn = document.createElement("button");
    confirmBtn.textContent = "확인";
    confirmBtn.type = "submit";
    // 취소버튼 생성
    var cancelBtn = document.createElement("button");
    cancelBtn.textContent = "취소";
    cancelBtn.type = "button";
    cancelBtn.style.backgroundColor = "lightgray";
    // form태그 안에 input, 버튼 추가
    formEl.appendChild(inputEl);
    formEl.appendChild(confirmBtn);
    formEl.appendChild(cancelBtn);
    todoItem.innerHTML = "";
    todoItem.appendChild(formEl);
    // 확인 이벤트 발생 시 입력창에 입력한 내용으로 수정.
    formEl.onsubmit = function (e) {
        e.preventDefault; //페이지 리로드 방지
        var updatedTitle = inputEl.value;
        if (!updatedTitle)
            return;
        var updatedTodo = {
            title: updatedTitle,
        };
        fetch(API_URL + "/" + todoId, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTodo),
        })
            .then(function (response) { return response.json(); })
            .then(function () {
            return fetch(API_URL);
        })
            .then(function (response) { return response.json(); })
            .then(function (data) { return renderTodo(data); });
    };
    //취소 버튼 클릭시 원래 내용으로 복원
    cancelBtn.onclick = function () {
        // todoItem.textContent = originalTitle;
        // const deleteEl = document.createElement("span");
        // deleteEl.textContent = "🗑️";
        // deleteEl.className = "deleteBtn";
        // deleteEl.onclick = () => deleteTodo(todoId);
        // const updateEl = document.createElement("span");
        // updateEl.textContent = "✏️";
        // updateEl.onclick = () => updateTodo(todoId, originalTitle);
        // todoItem.appendChild(deleteEl);
        // todoItem.appendChild(updateEl);
        fetch(API_URL)
            .then(function (response) { return response.json(); })
            .then(function (data) { return renderTodo(data); });
    };
};
