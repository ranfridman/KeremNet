import React from "react";
import "./App.css";
import Post, {
  PostProps,
} from "./features/Post/Post";
function App() {
  const Posts: PostProps = {
    text: "text",
    comments: {
      comments: [
        { commentContent: "comment1", userName: "userName", date: "date" },
        { commentContent: "comment2", userName: "userName", date: "date" },
        { commentContent: "comment2", userName: "userName", date: "date" },
        { commentContent: "comment2", userName: "userName", date: "date" },
        { commentContent: "comment2", userName: "userName", date: "date" },
      ],
    },
    likes: 10,
    creatorName: "creatorName",
    date: "date",
  };
  return (
    <div className="App">
      <Post {...Posts} />
    </div>
  );
}

export default App;
