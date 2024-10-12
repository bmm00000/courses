import { useState } from "react";

import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";

import classes from "./PostsList.module.css";

function PostsList({ modalIsShown, onHideModal }) {
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
      {modalIsShown && (
        <Modal onClose={onHideModal}>
          <NewPost
            onAuthorChange={authorChangeHandler}
            onTextChange={textChangeHandler}
            onCancel={onHideModal}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} text={enteredText} />
        <Post author="Peter" text="This is Peter's post" />
        <Post author="Georgia" text="This is Georgia's post" />
      </ul>
    </>
  );
}

export default PostsList;
