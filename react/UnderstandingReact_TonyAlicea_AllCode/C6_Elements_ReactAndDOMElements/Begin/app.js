const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
  return React.createElement(
    "article",
    null,
    React.createElement("h2", null, "Counter "),
    React.createElement("p", null, "You clicked 1 times"),
    React.createElement("button", null, "Click me")
  );
}

const allArticleElements = document.getElementsByTagName("article");
const firstArticleElement = document.getElementsByTagName("article").item(0);
console.log(allArticleElements);
console.log(firstArticleElement);

setTimeout(() => {
  const allArticleElements = document.getElementsByTagName("article");
  const firstArticleElement = document.getElementsByTagName("article").item(0);
  console.log(allArticleElements);
  console.log(firstArticleElement);
}, 1000);
