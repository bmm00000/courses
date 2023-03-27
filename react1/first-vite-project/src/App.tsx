import { useState } from "react";
import { AiFillLike } from "react-icons/ai";

import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import "./App.css";

const DUMMY_LIST = ["spain", "france", "uk"];

function App() {
  const [alertShown, setAlertShown] = useState(false);
  const [game, setGame] = useState({
    id: 1,
    player: { name: "John", age: 21 },
  });
  const [pizza, setPizza] = useState({
    name: "Pepperoni",
    toppings: ["cheese", "tomato"],
  });
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product 1", quantity: 1 },
      { id: 1, title: "product 1", quantity: 1 },
    ],
  });

  const handleAddProduct = () => {
    setCart({
      ...cart,
      items: [{ ...[cart.items][0] }, { ...[cart.items][1], quantity: 2 }],
    });
  };

  const handleAddTopping = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "new topping"] });
  };

  const handleShowAlert = () => {
    setAlertShown(true);
  };

  const handleHideAlert = () => {
    setAlertShown(false);
  };

  const handleUpdateGame = () => {
    setGame({ ...game, player: { ...game.player, age: 22 } });
  };

  return (
    <>
      <AiFillLike onClick={() => console.log("clicked!")} />
      <ListGroup heading="Countries" items={DUMMY_LIST} />
      {/* {alertShown && <Alert onHide={handleHideAlert}>Watch out!</Alert>}
      <Button color="danger" onClick={handleShowAlert}>
        Click me!
      </Button> */}
      <button onClick={handleUpdateGame}>update game</button>
      <button onClick={handleAddTopping}>add topping</button>
      <button onClick={handleAddProduct}>add topping</button>
    </>
  );
}

export default App;
