const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:3000/todos";

interface Todo {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
}
fetch(API_URL)
  .then((response) => response.json())
  .then((data: Todo[]) => renderTodo(data));

const updateTodo = (todoId: number, originalTitle : string):void => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  if (!todoItem) return;

  const inputli = document.createElement("input");
  inputli.type = "text";
  inputli.value = originalTitle;

  todoItem.innerHTML = ""; // 기존 내용을 삭제
  todoItem.appendChild(inputli); 
  // todoItem.innerHTML("");
  // todoItem.append(inputli);
  // const  updatedTodo = {
  //   title : inputli.value,
  
  // };
 
  
  inputli.addEventListener("keydown", (event: KeyboardEvent)=> {
      if (event.key === "Enter") {
          fetch(API_URL + "/" + todoId, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title : inputli.value,
          }),
        })
          .then((response) => response.json())
          .then(() => {
            return fetch(API_URL);
          })
          .then((response) => response.json())
          .then((data : Todo[]) => renderTodo(data));
      }
      });
 
};
 
const renderTodo = (newTodos : Todo[]):void => {
  if (!todoListEl) return;
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
    udpateEl.onclick = () => updateTodo(todo.id, todo.title);

    listEl.append(deleteEl);
    listEl.append(udpateEl);
    todoListEl.append(listEl);
  });
};

const addTodo = ():void => {
  if (!todoInputEl) return;

  const title = (todoInputEl as HTMLInputElement).value;
  const date = new Date();
  const createdAt = date.toDateString();

  if (!title) return;

  const newTodo: Omit<Todo, "completed"> = {
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
    .then((data: Todo[]) => renderTodo(data));
};

const deleteTodo = (todoId: number):void => {
  // console.log(`Deleting todo with ID: ${todoId}`);

  fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data: Todo[]) => renderTodo(data))
    .catch(error=>(
      console.log(error)
    ))
};