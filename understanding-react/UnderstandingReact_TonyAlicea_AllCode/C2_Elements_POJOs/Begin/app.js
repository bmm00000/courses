let markup = {
  type: "article",
  children: [
    {
      type: "p1",
      children: [
        {
          type: "text",
          value: "This is our article",
        },
      ],
    },
    {
      type: "ul",
      children: [
        { type: "li", children: [{ type: "text", value: "our first item" }] },
        { type: "li", children: [{ type: "text", value: "our second item" }] },
      ],
    },
  ],
};

function addElement(pojo, parentDOMNode) {
  let newDOMNode =
    pojo.type === "text"
      ? document.createTextNode(pojo.value)
      : document.createElement(pojo.type);

  pojo.children?.forEach((child) => {
    addElement(child, newDOMNode);
  });

  parentDOMNode.appendChild(newDOMNode);
}

addElement(markup, document.getElementById("app"));
