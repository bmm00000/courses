import Post from "./components/Post";

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Post author="John" text="This is John's post" />
      <Post author="Peter" text="This is Peter's post" />
      <Post author="Georgia" text="This is Georgia's post" />
    </div>
  );
}

export default App;
