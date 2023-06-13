import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onItemClick: (id: string) => void }> = ({
  items,
  onItemClick,
}) => {
  return (
    <>
      <ul className={classes.todos}>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            id={item.id}
            onClick={onItemClick}
            // if you don't want to pass down the id, you can bind onClick, as follows:
            // onClick={onItemClick.bind(null, item.id)}
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
