import { Link } from "react-router-dom";

import classes from "./Post.module.css";

const Post = ({ author, text, id }) => {
  return (
    <Link className={classes.post} to={id}>
      <p className={classes.text}>{text}</p>
      <p className={classes.author}>{author}</p>
    </Link>
  );
};

export default Post;
