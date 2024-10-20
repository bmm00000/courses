import { Link, Form } from "react-router-dom";

import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

function NewPost() {
  return (
    <>
      <Modal>
        <Form method="post" className={classes.form}>
          <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" name="body" required rows={3} />
          </p>
          <p>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" required />
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
    </>
  );
}

export default NewPost;

// by using the Form component from react-router, we avoid submitting the
// request that would be sent by default if we used the normal form element,
// and we can also access the form data as follows.
// also, we specify the method in the Form component, just in case there are several forms
// in this same component, so then we can identify each of them in the following action
// function, if we want (not in this case).
export async function action({ request }) {
  const formData = await request.formData();
  fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
