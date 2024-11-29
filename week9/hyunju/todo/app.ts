// import { LargeNumberLike } from "crypto";

const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";


interface Todo{
  id:number;
  title:string;
  createdAt:string;
  completed:boolean;
}

fetch(API_URL)
  .then((response) => response.json())
  .then((data: Todo[]) => renderTodo(data));

const updateTodo = (todo) :void => {
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
        (todoInputEl as HTMLInputElement).value = "";
        return fetch(API_URL);
      })
      .then((response) => response.json())
      .then((data) => renderTodo(data));
};

const renderTodo = (newTodos: Todo[]): void => {
  if(!todoListEl) return;
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

const addTodo = (): void => {
  if(!todoInputEl) return;
  const title = (todoInputEl as HTMLInputElement).value;
  const date = new Date();
  const createdAt: string = date.toDateString();

  let idid=date.getTime.toString();

  const newTodo: Omit<Todo, "completed"> = {
    // id: date.getTime().toString(), number타입으로 고정되서 tosring xx
    id: date.getTime(),
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
      (todoInputEl as HTMLInputElement).value = "";
      return fetch(API_URL);
    })
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};

const deleteTodo = (todoId: number): void => {
  fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data) => renderTodo(data));
};
