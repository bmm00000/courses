import { useState } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newItem = new Todo(text);
    setTodoItems((existingItems) => existingItems.concat(newItem));
  };

  const handleDeleteTodo = (id: string) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <h1>Todo list</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos items={todoItems} onItemClick={handleDeleteTodo} />
    </>
  );
}

export default App;
