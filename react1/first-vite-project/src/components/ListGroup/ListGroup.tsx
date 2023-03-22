import { useState } from "react";

import "./ListGroup.css";

interface Props {
  heading: string;
  items: string[];
}

const ListGroup = ({ heading, items }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>There are no items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={`list-group-item ${index === selectedIndex && "active"}`}
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
