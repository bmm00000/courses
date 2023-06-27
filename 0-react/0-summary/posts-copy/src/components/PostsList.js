import { useState, useEffect } from "react";

import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:8080/posts");
      const parsedResponse = await response.json();
      setPosts(parsedResponse.posts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // const addPostHandler = (post) => {
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(post),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   setPosts((existingPosts) => [post, ...existingPosts]);
  // };

  const postItems = posts.map((post) => (
    <Post key={post.id} author={post.author} text={post.text} />
  ));

  return (
    <main>
      {loading && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>Loading...</h2>
        </div>
      )}
      {!loading && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No posts yet</h2>
          <p>Start adding some?</p>
        </div>
      )}
      {!loading && posts.length > 0 && (
        <ul className={classes.posts}>{postItems}</ul>
      )}
    </main>
  );
};

export default PostsList;
