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
fetch(API_URL) //API_URL에 get 요청을 보내 To-do 리스트 데이터를 가져옴, promise 객체를 반환. 응답이 도착하면 .then()메소드로 이어짐.
    .then(function (response) { return response.json(); }) //서버에서 받은 응답은 response 객체로 반환되며 이 응답을 JSON형식으로 변환. json()도 비동기함수라 Promise를 반환하여 변환된 JSON데이터를 다음 then에서 사용
    .then(function (data) { return renderTodo(data); }); // JSON형식으로 변환된 배열 데이터를 화면에 표시.
var updateTodo = function (todoId, originalTitle) {
    var todoItem = document.querySelector("#todo-".concat(todoId));
    if (!todoItem)
        return;
    // mission
    var updateInput = document.createElement("input");
    updateInput.type = "text";
    updateInput.value = originalTitle;
    todoItem.innerHTML = "";
    todoItem.append(updateInput);
    var updatebtn = document.createElement("button");
    updatebtn.textContent = "✏️";
    todoItem.append(updatebtn);
    updatebtn.onclick = function () {
        var updateTitle = updateInput.value;
        if (updateTitle) {
            fetch(API_URL + "/" + todoId, {
                method: "PUT", //서버에 있는 데이터를 수정
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title: updateTitle }),
            })
                .then(function () {
                updateInput.value = "";
                updatebtn.remove();
                return fetch(API_URL);
            })
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
        var deleteEl = document.createElement("button");
        deleteEl.textContent = "🗑️";
        deleteEl.onclick = function () { return deleteTodo(todo.id); };
        var udpateEl = document.createElement("button");
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
        id: date.getTime(), //id가 string만 지원됨
        title: title,
        createdAt: createdAt,
        completed: false,
    };
    fetch(API_URL, {
        method: "POST", //API_URL에 새로운 todo데이터 전송
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(__assign({}, newTodo)), //JSON.stringify()는 자바스크립트 객체나 배열을 JSON 문자열로 변환하는 함수, ...newTodo는 newTodo 객체의 모든 프로퍼티를 새 객체에 복사하는 역할,새 객체에 completed: false라는 새로운 프로퍼티가 추가
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
