import { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const inputTextRef = useRef<HTMLInputElement>(null);
  // we have to specify the HTMLInputElement becuase otherwise it could be assigned to any other type of element.
  // we assign the initial value as null, because the ref could be assigned to an element by defualt.

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputTextRef.current!.value;
    // we need to add ! or ?, because the element is possibly null (since we initialize it as null before).
    if (enteredText.trim().length === 0) return;
    todosCtx.addItem(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmitForm}>
      <label htmlFor="todo">New todo:</label>
      <input type="text" id="todo" ref={inputTextRef} />
      <button>Add!</button>
    </form>
  );
};

export default NewTodo;
