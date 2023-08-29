import usePost from "./hook/usePost";
import "./App.css";

function App() {
  const { get, remove } = usePost();

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      <FeedSection />
    </div>
  );
}

const PostContainer = () => {
  return (
    
  );
};

const FeedSection = () => {
  return (
    
  );
};

const Post = () => {
  return (
    
  );
};

export default App;
