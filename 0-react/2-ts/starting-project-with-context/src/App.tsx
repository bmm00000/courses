import TodosContextProvider from "./store/todos-context";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <TodosContextProvider>
      <h1>Todo list</h1>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
