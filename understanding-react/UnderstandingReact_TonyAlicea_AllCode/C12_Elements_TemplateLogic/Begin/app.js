const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

let counterVersion = 0;

function App() {
  return React.createElement(
    "section",
    null,
    React.createElement("h1", null, "Counters"),
    React.createElement(
      "section",
      null,
      React.createElement(counterVersion === 0 ? Counter0 : Counter1, {
        name: "Our custom counter",
      })
    )
  );
}

function Counter0({ name }) {
  return React.createElement(
    "article",
    null,
    React.createElement("h2", null, "Counter V0. ", name),
    React.createElement("p", null, "This is version 0"),
    React.createElement("button", null, "Click me")
  );
}

function Counter1({ name }) {
  return React.createElement(
    "article",
    null,
    React.createElement("h2", null, "Counter V1. ", name),
    React.createElement("p", null, "This is version 1"),
    React.createElement("button", null, "Click me")
  );
}

function updateVersion() {
  console.log("Updating version...");
  counterVersion =
    counterVersion === 0 ? (counterVersion = 1) : (counterVersion = 0);
  console.log(counterVersion);
  root.render(React.createElement(App));
}
