import { useState } from "react";

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

const DUMMY_LIST = ["spain", "france", "uk"];

function App() {
  const [alertShown, setAlertShown] = useState(false);

  const handleShowAlert = () => {
    setAlertShown(true);
  };

  const handleHideAlert = () => {
    setAlertShown(false);
  };

  return (
    <>
      <ListGroup heading="Countries" items={DUMMY_LIST} />
      {/* {alertShown && <Alert onHide={handleHideAlert}>Watch out!</Alert>}
      <Button color="danger" onClick={handleShowAlert}>
        Click me!
      </Button> */}
    </>
  );
}

export default App;
