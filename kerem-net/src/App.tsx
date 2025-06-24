import React from "react";
import "./App.css";
import PostComponent, {
  PostComponentProps,
} from "./features/PostComponent/PostComponent";
function App() {
  const Post: PostComponentProps = {
    text: "text",
    comments: {
      comments: [
        { commentContent: "comment1" },
        { commentContent: "comment2" },
        { commentContent: "comment2" },
        { commentContent: "comment3" },
      ]
    },
    likes: 10,
    creatorName: "creatorName",
    date: "date",
  };
  return (
    <div className="App">
      <PostComponent {...Post} />
    </div>
  );
}

export default App;
