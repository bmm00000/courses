import ListGroup from "./components/ListGroup";

const DUMMY_LIST = ["spain", "france", "uk"];

function App() {
  return (
    <>
      <ListGroup heading="Countries" items={DUMMY_LIST} />
    </>
  );
}

export default App;
