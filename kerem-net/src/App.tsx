import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage, { HomePageProps } from "./features/HomePage/HomePage";
import Data from "./Data/posts.json";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import AppsIcon from '@mui/icons-material/Apps';
function App() {
  const posts: HomePageProps["initialPosts"] = [
    {
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.",
      comments: {
        comments: [
          { commentContent: "test1", userName: "SDF", date: "test" },
          { commentContent: "test1", userName: "test", date: "test" },
          { commentContent: "test1", userName: "ASGD", date: "test" },
          { commentContent: "test1", userName: "Rtest", date: "test" },
        ],
      },
      likes: 1323,
      creatorName: "Ran",
      date: "3/3/3",
    },
    {
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.",
      comments: {
        comments: [
          { commentContent: "test1", userName: "SDF", date: "3/3/3" },
          { commentContent: "test1", userName: "Rtest", date: "3/3/3" },
        ],
      },
      likes: 1323,
      creatorName: "test",
      date: "test",
    },
  ];
  const NAVIGATION: Navigation = [
    {
      kind: "header",
      title: "Navigation Bar",
    },
    {
      segment: "page-2",
      title: "Posts",
      icon: <AppsIcon />,
    },
  ];
  const theme = createTheme({
  palette: {
    primary: {
      main: '#22817E',
    },
    secondary: {
      main: '#22817E',
    },
  },
});

  return (
    <div className="App">
      <AppProvider
        navigation={NAVIGATION}
        branding={{
          title: "KeremNet",
          logo:<img src={logo} alt="logo image" style={{width: "7vh", height: "7vh", margin: "0.5vh"}}/> ,
        }}
        theme={theme}
      >
        <DashboardLayout>
          <HomePage initialPosts={posts} />
        </DashboardLayout>
      </AppProvider>
    </div>
  );
}

export default App;
