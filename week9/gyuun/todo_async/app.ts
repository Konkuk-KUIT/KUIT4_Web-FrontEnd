const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:3000/todos";

interface Todo {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
}
// fetch(API_URL)
//   .then((response) => response.json())
//   .then((data: Todo[]) => renderTodo(data));
const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};
window.addEventListener(
  "load",
  async () => {
    const newTodos = await fetchTodos();
    renderTodo(newTodos);
  },
  false
);// 함수 만들고 처음 시작 부분 로딩 한거 같음

const updateTodo = (todoId: number, originalTitle : string):void => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  if (!todoItem) return;

  const inputli = document.createElement("input");
  inputli.type = "text";
  inputli.value = originalTitle;

  todoItem.innerHTML = ""; // 기존 내용을 삭제
  todoItem.appendChild(inputli); 
 
  const fetchUpdate = async () =>{
    await fetch(API_URL + "/" + todoId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title : inputli.value,
      }),
    });
    const newTodos = await fetchTodos();
    renderTodo(newTodos);

  }
 
  /// 여기 마저 써야함
  const enterKeyEvent = (e:KeyboardEvent)=>{
    if(e.key === "Enter"){
      fetchUpdate();
    }
  }
  inputli.addEventListener("keydown",enterKeyEvent);
 
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

const addTodo = async ()=> {
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

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...newTodo, completed: false }),
  });
  (todoInputEl as HTMLInputElement).value="";
  const newTodos = await fetchTodos();
    renderTodo(newTodos);
};


const deleteTodo = async(todoId: number)=>{
  await fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  });
  const newTodos = await fetchTodos();
  renderTodo(newTodos);
}