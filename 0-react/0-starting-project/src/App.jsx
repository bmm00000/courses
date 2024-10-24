import { useState, useEffect } from "react";

import MainHeader from "./components/MainHeader";
import Modal from "./components/Modal";
import NewPost from "./components/NewPost";
import PostsList from "./components/PostsList";

function App() {
  const [posts, setPosts] = useState([]);
  const [modalIsShown, setModalIsShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsLoading(false);
    }
    fetchPosts();
  }, []);

  function showModalHandler() {
    setModalIsShown(true);
  }

  function hideModalHandler() {
    setModalIsShown(false);
  }

  function addPostHandler(newPost) {
    setPosts((existingPosts) => [...existingPosts, newPost]);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        {modalIsShown && (
          <Modal onClose={hideModalHandler}>
            <NewPost onSubmit={addPostHandler} onCancel={hideModalHandler} />
          </Modal>
        )}
        <PostsList posts={posts} isLoading={isLoading} />
      </main>
    </>
  );
}

export default App;
