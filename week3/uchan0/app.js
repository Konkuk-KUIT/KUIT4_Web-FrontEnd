const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

const renderTodo = (newTodos) => {
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
      // 최신 목록을 다시 가져와서 렌더링
      todoInputEl.value = "";
      return fetch(API_URL);
    })
    .then((response) => response.json().then((data) => renderTodo(data)));
};

const deleteTodo = (todoId) => {
  fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })
    // 최신 목록을 다시 가져와서 렌더링
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};

//mission
const updateTodo = (todoId, originalTitle) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);

  // 입력창 생성
  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.value = "";

  // 확인버튼 생성
  const confirmBtn = document.createElement("button");
  confirmBtn.textContent = "확인";

  // 취소버튼 생성
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "취소";
  cancelBtn.style.backgroundColor = "lightgray";

  todoItem.innerHTML = "";
  todoItem.appendChild(inputEl);
  todoItem.appendChild(confirmBtn);
  todoItem.appendChild(cancelBtn);

  // 확인버튼 생성 시 입력창에 입력한 내용으로 수정.
  confirmBtn.onclick = () => {
    const updatedTitle = inputEl.value;
    const updatedTodo = {
      title: updatedTitle,
    };

    fetch(API_URL + "/" + todoId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((response) => response.json())
      .then(() => {
        return fetch(API_URL);
      })
      .then((response) => response.json())
      .then((data) => renderTodo(data));
  };

  //취소 버튼 클릭시 원래 내용으로 복원
  cancelBtn.onclick = () => {
    todoItem.textContent = originalTitle;

    const deleteEl = document.createElement("span");
    deleteEl.textContent = "🗑️";
    deleteEl.className = "deleteBtn";
    deleteEl.onclick = () => deleteTodo(todoId);

    const updateEl = document.createElement("span");
    updateEl.textContent = "✏️";
    updateEl.onclick = () => updateTodo(todoId, originalTitle);

    todoItem.appendChild(deleteEl);
    todoItem.appendChild(updateEl);
  };
};
