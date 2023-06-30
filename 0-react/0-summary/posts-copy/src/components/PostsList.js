import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
  const posts = useLoaderData();

  const postItems = posts.map((post) => (
    <Post key={post.id} author={post.author} text={post.text} id={post.id} />
  ));

  return (
    <main>
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No posts yet</h2>
          <p>Start adding some?</p>
        </div>
      )}
      {posts.length > 0 && <ul className={classes.posts}>{postItems}</ul>}
    </main>
  );
};

export default PostsList;
