const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");

const API_URL = "http://localhost:8080/todos";

// 인터페이스로 새로운 타입 생성
interface Todo {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
}

fetch(API_URL)
  .then((response) => response.json())
  .then((data: Todo[]) => renderTodo(data));
  // json데이터를 받을 때 Todo[] 배열에 넣음
  // Swift에서도 데이터를 get할 때 responseDecodable(of:)에 타입 명시하는 것처럼
  // 이것도 같은 맥락인 듯?

const updateTodo = (todoId: number, originalTitle: string): void => {
  const todoItem = document.querySelector(`#todo-${todoId}`);
  if (!todoItem) return; // todoItem이 null일 수 있으므로 미리 처리

  const inputContent = document.createElement("input");
  inputContent.value = originalTitle;
  inputContent.className = "updateInput";

  const fetchUpdate = (): void => {
    fetch(API_URL + "/" + todoId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: inputContent.value }),
    })
      .then(() => fetch(API_URL))
      .then((response) => response.json())
      .then((data: Todo[]) => renderTodo(data));
  };

  const enterKeyEvent = (e: KeyboardEvent): void => {
    if (e.key === "Enter") {
      fetchUpdate();
    }
  };
  inputContent.addEventListener("keyup", enterKeyEvent);

  const outsideClickEvent = (e: MouseEvent): void => {
    const target = e.target as HTMLElement;
    if (!target) return;

    if (inputContent.contains(target) || target.className === "updateBtn") {
      console.log("clicked inside");
    } else {
      console.log("clicked outside");
      fetchUpdate();
    }
  };

  document.body.addEventListener("click", outsideClickEvent);

  todoItem.removeChild(todoItem.childNodes[0]);
  todoItem.insertBefore(inputContent, todoItem.firstChild);
};

const renderTodo = (newTodos: Todo[]): void => {
  if (!todoListEl) return;
  // type narrowing
  // todoListEl에 마우스 hover하면 타입이 HTMLElement | null 로 나옴
  // null일 때 todoListEl의 값에 접근하면 오류 발생하므로 미리 return시켜야 함

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
    updateEl.className = "updateBtn";
    updateEl.onclick = () => updateTodo(todo.id, todo.title);

    listEl.append(deleteEl);
    listEl.append(updateEl);
    todoListEl.append(listEl);
  });
};

const addTodo = (): void => {
  if (!todoInputEl) return;
  const title = (todoInputEl as HTMLInputElement).value;
  const date = new Date();
  const createdAt = date.toDateString();

  if (!title) return;

  const newTodo: Omit<Todo, "completed"> = {
    // Todo타입에서 completed만 제외하고 newTodo 생성
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
      if (todoInputEl) { // 작성했던 추가 todolist를 초기화하는 코드
        (todoInputEl as HTMLInputElement).value = "";
      }
      return fetch(API_URL);
    })
    .then((response) => response.json())
    .then((data: Todo[]) => renderTodo(data));
};

const deleteTodo = (todoId: number): void => {
  fetch(API_URL + "/" + todoId, {
    method: "DELETE",
  })
    .then(() => fetch(API_URL))
    .then((response) => response.json())
    .then((data: Todo[]) => renderTodo(data));
};
