var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");
const API_URL = "http://localhost:8080/todos";
const fetchTodos = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch(API_URL);
    const data = yield response.json();
    return data;
});
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => renderTodo(data));
const renderTodo = (newTodos) => {
    if (!todoListEl)
        return;
    todoListEl.innerHTML = "";
    newTodos.forEach((todo) => {
        const listEl = document.createElement("li");
        listEl.textContent = todo.title;
        listEl.id = `todo-${todo.id}`;
        const deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.className = "deleteBtn";
        deleteEl.onclick = () => deleteTodo(todo.id);
        const updateEl = document.createElement("span");
        updateEl.textContent = "✏️";
        deleteEl.className = "updateBtn";
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
        id: date.getTime(),
        title,
        createdAt,
    };
    // const newTodo: Todo = {
    //   id: date.getTime(),
    //   title,
    //   createdAt,
    //   completed: false,
    // };
    const fetchAdd = () => __awaiter(this, void 0, void 0, function* () {
        fetch(API_URL, {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Object.assign(Object.assign({}, newTodo), { completed: false })),
        });
        const newTodos = yield fetchTodos();
        renderTodo(newTodos);
    });
    fetchAdd();
    // fetch(API_URL, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ ...newTodo, completed: false }),
    // })
    //   .then((response) => response.json())
    //   .then(() => {
    //     // 최신 목록을 다시 가져와서 렌더링
    //     if (todoInputEl) {
    //       (todoInputEl as HTMLInputElement).value = "";
    //     }
    //     return fetch(API_URL);
    //   })
    //   .then((response) => response.json())
    //   .then((data: Todo[]) => renderTodo(data));
};
const deleteTodo = (todoId) => __awaiter(this, void 0, void 0, function* () {
    yield fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    });
    const response = yield fetch(API_URL);
    const data = yield response.json();
    renderTodo(data);
    // 최신 목록을 다시 가져와서 렌더링
    // .then(() => fetch(API_URL))
    // .then((response) => response.json())
    // .then((data) => renderTodo(data));
});
//mission
const updateTodo = (todoId, originalTitle) => {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    if (!todoItem)
        return;
    //form 태그 생성
    const formEl = document.createElement("form");
    // 입력창 생성
    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.value = "";
    // 확인버튼 생성
    const confirmBtn = document.createElement("button");
    confirmBtn.textContent = "확인";
    confirmBtn.type = "submit";
    // 취소버튼 생성
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "취소";
    cancelBtn.type = "button";
    cancelBtn.style.backgroundColor = "lightgray";
    // form태그 안에 input, 버튼 추가
    formEl.appendChild(inputEl);
    formEl.appendChild(confirmBtn);
    formEl.appendChild(cancelBtn);
    todoItem.innerHTML = "";
    todoItem.appendChild(formEl);
    // async, await 추가
    const fetchUpdate = () => __awaiter(this, void 0, void 0, function* () {
        fetch(API_URL + "/" + todoId, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: inputEl.value }),
        });
        const newTodos = yield fetchTodos();
        renderTodo(newTodos);
    });
    // 확인 이벤트 발생 시 입력창에 입력한 내용으로 수정.
    formEl.onsubmit = (e) => {
        e.preventDefault; //페이지 리로드 방지
        const updatedTitle = inputEl.value;
        if (!updatedTitle)
            return;
        const updatedTodo = {
            title: updatedTitle,
        };
        fetchUpdate();
        // fetch(API_URL + "/" + todoId, {
        //   method: "PATCH",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(updatedTodo),
        // })
        //   .then((response) => response.json())
        //   .then(() => {
        //     return fetch(API_URL);
        //   })
        //   .then((response) => response.json())
        //   .then((data) => renderTodo(data));
    };
    const fetchBack = () => __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(API_URL);
        const data = yield response.json();
        return data;
    });
    //취소 버튼 클릭시 원래 내용으로 복원
    cancelBtn.onclick = () => __awaiter(this, void 0, void 0, function* () {
        // fetch(API_URL)
        //   .then((response) => response.json())
        //   .then((data) => renderTodo(data));
        const data = yield fetchBack();
        renderTodo(data);
    });
};
