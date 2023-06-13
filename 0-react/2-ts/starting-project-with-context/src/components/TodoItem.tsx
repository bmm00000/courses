import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  id: string;
  onClick: (id: string) => void;
}> = ({ text, id, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <li className={classes.item} onClick={handleClick}>
      {text}
    </li>
  );
};

export default TodoItem;
