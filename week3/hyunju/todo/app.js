const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => renderTodo(data));

const updateTodo = (todo) => {
  // const todoItem = document.querySelector(`#todo-${todoId}`);
  
  // const todoInput= document.querySelector('#todoInput');
  const updatetitle = prompt("수정할 이름을 입력해주세요");


  // mission
  // const changedItem =todoItem.title;
  // originalTitle = changedItem;

  alert(updatetitle);
  // const updatedTodo = { ...todo, title: updatetitle };
  const updatedTodo = {
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

    fetch(API_URL + "/" + todo.id, { //특정 todo url로 put 요청해야 동작함
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((response) => response.json())
      .then(() => {
        todoInputEl.value = "";
        return fetch(API_URL);
      })
      .then((response) => response.json())
      .then((data) => renderTodo(data));
};

const renderTodo = (newTodos) => {
  todoListEl.innerHTML = "";
  newTodos.forEach((todo) => {
    const listEl = document.createElement("li");
    listEl.textContent = todo.title;
    listEl.id = `todo-${todo.id}`;

    const deleteEl = document.createElement("span");
    deleteEl.textContent = "🗑️";
    deleteEl.onclick = () => deleteTodo(todo.id);

    const udpateEl = document.createElement("span");
    udpateEl.textContent = "✏️";
    udpateEl.onclick = () => updateTodo(todo);

    listEl.append(deleteEl);
    listEl.append(udpateEl);
    todoListEl.append(listEl);
  });
};

const addTodo = () => {
  const title = todoInputEl.value;
  const date = new Date();
  const createdAt = date.toDateString();

  let idid=date.getTime.toString();

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
