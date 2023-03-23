import { useState } from "react";
import styled from "styled-components";

// import styles from "./ListGroup.module.css";

interface Props {
  heading: string;
  items: string[];
}

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li<ListItemProps>`
  background: ${({ active }) => (active ? "blue" : "")};
`;

const ListGroup = ({ heading, items }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>There are no items</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListGroup;
