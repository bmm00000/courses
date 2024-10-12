import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);

  function showModalHandler() {
    setModalIsShown(true);
  }

  function hideModalHandler() {
    setModalIsShown(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList modalIsShown={modalIsShown} onHideModal={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
