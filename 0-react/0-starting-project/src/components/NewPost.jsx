import { useState } from "react";

import classes from "./NewPost.module.css";

function NewPost({ onSubmit, onCancel }) {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredText, setEnteredText] = useState("");

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function textChangeHandler(event) {
    setEnteredText(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      author: enteredAuthor,
      text: enteredText,
    };
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    onSubmit(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={textChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
          {/* by default, buttons in a form are type="submit, 
          and the browser will submit an http request upon form submission" */}
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
