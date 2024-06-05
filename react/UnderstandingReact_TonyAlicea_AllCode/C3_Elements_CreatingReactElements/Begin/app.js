const rootNode = document.getElementById("app");

const root = ReactDOM.createRoot(rootNode);

root.render(React.createElement(App));
// root.render(App());

function App() {
  return React.createElement(
    "article",
    null,
    React.createElement("h2", null, "Counter: "),
    React.createElement(
      "p",
      null,
      "Click more times and it will be reflected on the counter"
    ),
    React.createElement("button", null, "Click me")
  );
}

console.log(App());
