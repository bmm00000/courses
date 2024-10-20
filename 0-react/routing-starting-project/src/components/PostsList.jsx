import Post from "./Post";

import classes from "./PostsList.module.css";

function PostsList({ posts, isLoading }) {
  return (
    <>
      {isLoading && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading...</p>
        </div>
      )}
      {!isLoading && !posts.length && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Why don't you add some?</p>
        </div>
      )}
      {!isLoading && posts.length && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={`${post.author}-${post.text}-${Math.random()}`}
              author={post.author}
              text={post.text}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default PostsList;
