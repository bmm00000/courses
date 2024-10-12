import { useState } from "react";

import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";

import classes from "./PostsList.module.css";

function PostsList() {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredText, setEnteredText] = useState("");

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function textChangeHandler(event) {
    setEnteredText(event.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onAuthorChange={authorChangeHandler}
          onTextChange={textChangeHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredAuthor} text={enteredText} />
        <Post author="Peter" text="This is Peter's post" />
        <Post author="Georgia" text="This is Georgia's post" />
      </ul>
    </>
  );
}

export default PostsList;
