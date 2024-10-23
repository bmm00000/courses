import { Link, Form, redirect } from "react-router-dom";

import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="text" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link type="button" to="/">
            Cancel
            {/* by default, buttons in a form are type="submit, 
          and the browser will submit an http request upon form submission" */}
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

// by using the Form component from react-router, we avoid submitting the
// request that would be sent by default if we used the normal form element. when
// submitting the Form from react-router, the action function is called,
// and we can access the form data as follows.
// also, we specify the method in the Form component, just in case there are several forms
// in this same component, so then we can identify each of them in the following action
// function, if we want (not in this case).
export async function action({ request }) {
  const formData = await request.formData();
  // formData is a complex object with, for example, a 'get' method that you can use
  // to extract the values from the fields in the form. But we are going to use
  // the built-in Object class:
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // we use the 'redirect' function from react-router by returning its invocation
  // in an action function:
  return redirect("/");
}
