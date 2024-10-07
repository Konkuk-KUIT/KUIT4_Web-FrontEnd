const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

const updateTodo = (todoId, originalTitle) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  
  // mission
  // 수정버튼 클릭 시 todoItem의 listEl에 접근, 그부분을 input태그로 바꾸기
  todoItem.innerHTML = "";
  
  const inputEl = document.createElement("input");
  inputEl.type = "text"; // text, email, password, tel, url, number, date 등 다양한 type 있음
  inputEl.value = originalTitle;
  todoItem.append(inputEl);
  
  // 수정버튼 클릭 시 span 생성, 거기 button 추가, todoItem에 append하기
  const spanEl = document.createElement("span");
  const confirmBtnEl = document.createElement("button");
  confirmBtnEl.textContent = "confirm";
  confirmBtnEl.onclick = () => {
    // 버튼 클릭 시 리스트 수정
    const updatedTitle = inputEl.value;
    updateList(todoId, updatedTitle)
  };
  spanEl.append(confirmBtnEl);
  todoItem.append(spanEl);
  
  // 엔터키 입력 시 리스트 수정
  inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // 기본 Enter 동작 방지
      const updatedTitle = inputEl.value;
      updateList(todoId, updatedTitle);
    }
  });
};

const updateList = (todoId, newTitle) => {
  if (!newTitle) { return }

  fetch(API_URL + '/' + todoId, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "title": newTitle
      // PATCH요청이므로 수정하려는 부분만 보내면 되고,
      // 만약 PUT요청을 보내면 전체 리소스의 필드를 보내야 함(id, completed, created, title 모두)
    })
  })
  .then((response) => response.json())
  .then((updatedTodo) => {
    // console.log(updatedTodo)
    // debugger;
    fetch(API_URL)
  })
  .then((response) => response.json())
  .then((data) => renderTodo(data))
}

const renderTodo = (newTodos) => {
  todoListEl.innerHTML = "";
  newTodos.forEach((todo) => {
    const listEl = document.createElement("li");
    listEl.textContent = todo.title;
    listEl.id = `todo-${todo.id}`;
    // 이 listElement의 listId를 설정해서,
    // updateTodo에서 document.querySelector로 이 id값을 가진 요소를 찾을 때 사용함

    const deleteEl = document.createElement("span");
    deleteEl.textContent = "🗑️";
    deleteEl.onclick = () => deleteTodo(todo.id);

    const updateEl = document.createElement("span");
    updateEl.textContent = "✏️";
    updateEl.onclick = () => updateTodo(todo.id, todo.title);
                             // todo.id: 생성한 리스트의 id

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
      todoInputEl.value = "";
      return fetch(API_URL);
    })
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};

const deleteTodo = (todoId) => {
  fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};