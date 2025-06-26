import React from "react";
import "./App.css";
<<<<<<< HEAD
import HomePage from "./features/HomePage/HomePage";
import Data from "./Data/posts.json";
function App() {
  const posts = Data;
  return (
    <div className="App">
      <HomePage initialPosts={posts}/>
=======
import Post, {
  PostProps,
} from "./features/Post/Post";
function App() {
  const posts: PostProps = {
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
      <Post {...posts} />
>>>>>>> post-component
    </div>
  );
}

export default App;
