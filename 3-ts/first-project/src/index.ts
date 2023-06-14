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

const handleSubmit = (event: SubmitEvent) => {
  event.preventDefault();

  const inputValue = input.value;
  const listItem = document.createElement("li");
  const newInput = document.createElement("input");
  newInput.type = "checkbox";
  listItem.textContent = inputValue;
  listItem.append(newInput);
  ul.append(listItem);
  input.value = "";
};

form.addEventListener("submit", handleSubmit);
