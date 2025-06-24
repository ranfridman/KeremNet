import React from "react";
import logo from "./logo.png";
import "./App.css";
import HomePage, { HomePageProps } from "./features/HomePage/HomePage";
import Data from "./Data/posts.json";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import AppsIcon from "@mui/icons-material/Apps";
import { red } from "@mui/material/colors";
function App() {
  const posts: HomePageProps["initialPosts"] = Data;
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
  return (
    <div className="App">
      <AppProvider
        navigation={NAVIGATION}
        branding={{
          title: "KeremNet",
          logo: (
            <img
              src={logo}
              alt="logo image"
              style={{ width: "5vh", height: "11vh", margin: "0.5vh" }}
            />
          ),
        }}
      >
        <DashboardLayout>
          <HomePage initialPosts={posts} />
        </DashboardLayout>
      </AppProvider>
    </div>
  );
}

export default App;
