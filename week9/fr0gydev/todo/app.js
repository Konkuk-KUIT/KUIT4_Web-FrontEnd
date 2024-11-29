// as 키워드로 타입 단언(Type assertion)을 사용하여 더 구체적인 타입을 지정
var todoListEl = document.getElementById("todoList");
var todoInputEl = document.getElementById("todoInput");
// DOM 요소가 존재하지 않을 경우를 대비한 null 체크
// TypeScript의 null 체크를 통과하기 위해 필요
if (!todoListEl || !todoInputEl) {
    throw new Error("Required DOM elements not found");
}
var API_URL = "http://localhost:8080/todos";
fetch(API_URL)
    .then(function (response) {
    if (!response.ok)
        throw new Error('Network response was not ok');
    return response.json();
})
    .then(function (data) { return renderTodo(data); })
    .catch(function (error) {
    console.error("Error fetching todos:", error);
    todoListEl.innerHTML = "<li>Failed to load todos. Please check your server connection.</li>";
});
var updateTodo = function (todoId, originalTitle) {
    var newTitle = prompt("Enter new title for the todo:", originalTitle);
    if (newTitle !== null && newTitle !== originalTitle) {
        fetch("".concat(API_URL, "/").concat(todoId), {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: newTitle }),
        })
            .then(function (response) {
            if (!response.ok)
                throw new Error('Network response was not ok');
            return response.json();
        })
            .then(function () { return fetch(API_URL); })
            .then(function (response) {
            if (!response.ok)
                throw new Error('Network response was not ok');
            return response.json();
        })
            .then(function (data) { return renderTodo(data); })
            .catch(function (error) {
            console.error("Error updating todo:", error);
            alert("Failed to update todo. Please try again.");
        });
    }
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
        var updateEl = document.createElement("span"); // 오타 수정: udpateEl -> updateEl
        updateEl.textContent = "✏️";
        updateEl.onclick = function () { return updateTodo(todo.id, todo.title); };
        listEl.append(deleteEl);
        listEl.append(updateEl);
        todoListEl.append(listEl);
    });
};
var addTodo = function () {
    var title = todoInputEl.value.trim(); // 앞뒤 공백 제거
    if (!title)
        return; // 빈 문자열 체크
    var date = new Date();
    var newTodo = {
        id: date.getTime().toString(),
        title: title,
        createdAt: date.toDateString(),
        completed: false
    };
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
    })
        .then(function (response) {
        if (!response.ok)
            throw new Error('Network response was not ok');
        return response.json();
    })
        .then(function () {
        todoInputEl.value = "";
        return fetch(API_URL);
    })
        .then(function (response) {
        if (!response.ok)
            throw new Error('Network response was not ok');
        return response.json();
    })
        .then(function (data) { return renderTodo(data); })
        .catch(function (error) {
        console.error("Error adding todo:", error);
        alert("Failed to add todo. Please try again.");
    });
};
var deleteTodo = function (todoId) {
    fetch("".concat(API_URL, "/").concat(todoId), {
        method: "DELETE",
    })
        .then(function (response) {
        if (!response.ok)
            throw new Error('Network response was not ok');
        return fetch(API_URL);
    })
        .then(function (response) {
        if (!response.ok)
            throw new Error('Network response was not ok');
        return response.json();
    })
        .then(function (data) { return renderTodo(data); })
        .catch(function (error) {
        console.error("Error deleting todo:", error);
        alert("Failed to delete todo. Please try again.");
    });
};
