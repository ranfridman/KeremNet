import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./features/HomePage/HomePage";
import Data from "./Data/posts.json";
function App() {
  const posts = Data;
  return (
    <div className="App">
      <HomePage initialPosts={posts}/>
    </div>
  );
}

export default App;
