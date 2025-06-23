import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./features/HomePage/HomePage";
import Data from "./Data/posts.json";
import NavBar from "./applicationLayout/navbar/navbar";
import Page from "./applicationLayout/page/page";
import Header from "./applicationLayout/header/header";
import MainSection from "./applicationLayout/mainSection/mainSection";
function App() {
  const posts = Data;
  return (
    <div className="App">
      <Header>
      </Header>
      <MainSection>
      <NavBar>
      </NavBar>
        
      <Page>
        <HomePage initialPosts={posts} />
      </Page>
      </MainSection>
    </div>
  );
}

export default App;
