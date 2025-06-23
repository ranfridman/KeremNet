import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostComponent from "./features/PostComponent/PostComponent";
function App() {
  return (
    <div className="App">
      <PostComponent
        text="text"
        comments={["comment1", "comment2"]}
        likes={10}
        creatorName="creatorName"
        date="date"
      />
    </div>
  );
}

export default App;
