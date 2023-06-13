import React, { useState } from "react";

import Todo from "../models/todo";

type TodosContextObj = {
  todoItems: Todo[];
  addItem: (text: string) => void;
  deleteItem: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  todoItems: [],
  addItem: (text: string) => {},
  deleteItem: (id: string) => {},
});

const TodosContextProvider: React.FC = ({ children }) => {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newItem = new Todo(text);
    setTodoItems((existingItems) => existingItems.concat(newItem));
  };

  const handleDeleteTodo = (id: string) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
  };

  const contextValue: TodosContextObj = {
    todoItems,
    addItem: handleAddTodo,
    deleteItem: handleDeleteTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
