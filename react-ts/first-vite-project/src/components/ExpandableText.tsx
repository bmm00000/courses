import { useState } from "react";

interface Props {
  characters: number;
}

export const ExpandableText = ({ characters }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta totam id asperiores facere exercitationem tempora ipsam quaerat earum iusto fuga, doloribus impedit maxime harum aspernatur quisquam voluptatibus quam consequatur autem.";

  const modifiedText = expanded ? text : `${text.slice(0, characters)}...`;
  const buttonText = expanded ? "Hide" : "Expand";

  const handleButtonClick = () => {
    setExpanded((existingExp) => !existingExp);
  };

  return (
    <>
      <p>{modifiedText}</p>
      <button onClick={handleButtonClick}>{buttonText}</button>
    </>
  );
};
