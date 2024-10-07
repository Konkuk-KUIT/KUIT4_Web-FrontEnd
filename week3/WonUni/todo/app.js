const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

fetch(API_URL)        //API_URL에 get 요청을 보내 To-do 리스트 데이터를 가져옴, promise 객체를 반환. 응답이 도착하면 .then()메소드로 이어짐.
  .then((response) => response.json()) //서버에서 받은 응답은 response 객체로 반환되며 이 응답을 JSON형식으로 변환. json()도 비동기함수라 Promise를 반환하여 변환된 JSON데이터를 다음 then에서 사용
  .then((data) => renderTodo(data));// JSON형식으로 변환된 배열 데이터를 화면에 표시.

const updateTodo = (todoId, originalTitle) => {
  const todoItem = document.querySelector(`#todo-${todoId}`);

  // mission
  const updateInput = document.createElement("input");
  updateInput.type="text";
  updateInput.value=originalTitle;
  todoItem.innerHTML="";
  todoItem.append(updateInput);
  const updatebtn = document.createElement("button");
  updatebtn.textContent = "✏️";
  todoItem.append(updatebtn);
  updatebtn.onclick = () => {
    const updateTitle = updateInput.value;
    if(updateTitle){
      fetch(API_URL + "/" + todoId, {
        method: "PUT", //서버에 있는 데이터를 수정
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: updateTitle }), 
      })
        .then(() => {
          updateInput.value = ""; 
          updatebtn.remove(); 
          return fetch(API_URL); 
        })
        .then((response) => response.json())
        .then((data) => renderTodo(data));
    }
  }
  
  
};

const renderTodo = (newTodos) => {
  todoListEl.innerHTML = "";
  newTodos.forEach((todo) => {
    const listEl = document.createElement("li");
    listEl.textContent = todo.title;
    listEl.id = `todo-${todo.id}`;

    const deleteEl = document.createElement("button");
    deleteEl.textContent = "🗑️";
    deleteEl.onclick = () => deleteTodo(todo.id);

    const udpateEl = document.createElement("button");
    udpateEl.textContent = "✏️";
    udpateEl.onclick = () => updateTodo(todo.id, todo.title);

    listEl.append(deleteEl);
    listEl.append(udpateEl);
    todoListEl.append(listEl);
  });
};

const addTodo = () => {
  const title = todoInputEl.value;
  const date = new Date();
  const createdAt = date.toDateString();

  if (!title) return;

  const newTodo = {
    id: date.getTime().toString(),  //id가 string만 지원됨
    title,
    createdAt,
  };

  fetch(API_URL, {
    method: "POST",   //API_URL에 새로운 todo데이터 전송
    headers: {    //요청 본문이 JSON형식임을 서버에 알림
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...newTodo, completed: false }),   //JSON.stringify()는 자바스크립트 객체나 배열을 JSON 문자열로 변환하는 함수, ...newTodo는 newTodo 객체의 모든 프로퍼티를 새 객체에 복사하는 역할,새 객체에 completed: false라는 새로운 프로퍼티가 추가
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
