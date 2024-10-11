const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
  return React.createElement(
    "section",
    null,
    React.createElement("h1", null, "Counters"),
    React.createElement(
      "section",
      null,
      React.createElement(Counter, { name: "First counter" }),
      React.createElement(Counter, { name: "Second counter" })
    )
  );
}

function Counter({ name }) {
  name = "hacking this!";
  return React.createElement(
    "article",
    null,
    React.createElement("h2", null, "This is the name: ", name),
    React.createElement("p", null, "You clicked 1 times"),
    React.createElement("button", null, "Click me")
  );
}
