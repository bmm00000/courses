import React, { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import Item from "./models/item";
import { v4 as getId } from "uuid";
import "./App.css";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    console.log("MADE TO THE APP COMPONENT!");
    setItems([...items, { id: getId(), product, quantity }]);
  };
  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;

// // if you use arrow functions, don't forget to add a comma in the generics, or the IDE will take it as JSX:
// const doSmth = <T,>(something: T): T => {
//   return something;
// };
