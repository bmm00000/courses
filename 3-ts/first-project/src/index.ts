function saySomething(message: string): void {
  console.log(message);
  console.log(message);
}

saySomething("hello");

// type assertions:
const mystery: unknown = "mystery here";
const mysteryLength = (mystery as string).length;

const input = document.getElementById("input") as HTMLInputElement;
// // non-null assertion operator:
// const btn = document.getElementById("btn")!;
const form = document.querySelector("form") as HTMLFormElement;
const ul = document.querySelector("ul")!;

// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
//   // another syntax to assert the type (so we don't need 'as HTMLInputElement' above):
//   //   alert((<HTMLInputElement>input).value);
//   //   (<HTMLInputElement>input).value = ''
// });

interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

function createTodo(todo: Todo): void {
  const listItem = document.createElement("li");
  const newInput = document.createElement("input");
  newInput.type = "checkbox";
  newInput.checked = todo.completed;
  listItem.textContent = todo.text;
  listItem.append(newInput);
  ul.append(listItem);
}

const handleSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  const newTodo: Todo = { text: input.value, completed: false };
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
  createTodo(newTodo);
  input.value = "";
};

form.addEventListener("submit", handleSubmit);
