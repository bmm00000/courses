import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FunctionComponent = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <>
      <ul className={classes.todos}>
        {todosCtx.todoItems.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            id={item.id}
            onClick={todosCtx.deleteItem}
            // if you don't want to pass down the id, you can bind onClick, as follows:
            // onClick={todosCtx.deleteItem.bind(null, item.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Todos;

// // we can define a function using a generic type:
// function addToList<T>(list: T[], newElement: T): T[] {
//   return [...list, newElement];
// }

// // or we can call a function using a generic type:
// addToList<number>([1, 2], 3);
// // so ts will complain with the following:
// addToList<string>([1, 2], 3);

// React.FC is defined in the  "@types/react" package. When we use React.FC, we are defining a function using a generic type.
