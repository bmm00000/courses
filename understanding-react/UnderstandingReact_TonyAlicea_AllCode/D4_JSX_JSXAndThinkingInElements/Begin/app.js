const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

let counterVersion = 1;

function App() {
  const counter = counterVersion === 1 ? <Counter1 /> : <Counter2 />;
  return (
    <section>
      <h1>Counters</h1>
      <section>{counter}</section>
    </section>
  );
}

function Counter1(props) {
  return (
    <article>
      <h2>Counter</h2>
      <p>This is counter version 1</p>
      <button class="button">Click me</button>
    </article>
  );
}

function Counter2(props) {
  return (
    <article>
      <h2>Counter</h2>
      <p>This is counter version 2</p>
      <button class="button">Click me</button>
    </article>
  );
}

function rerender() {
  console.log("we are rerendering");
  counterVersion = counterVersion === 1 ? 2 : 1;
  root.render(React.createElement(App));
}
