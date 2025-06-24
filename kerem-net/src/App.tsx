import React from "react";
import logo from "./logo.png";
import "./App.css";
import HomePage, { HomePageProps } from "./features/HomePage/HomePage";
import Data from "./Data/posts.json";
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import AppsIcon from "@mui/icons-material/Apps";
function App() {
  const posts: HomePageProps["initialPosts"] = Data;
  const router = useDemoRouter('/page');

  const NAVIGATION: Navigation = [
    {
      kind: "header",
      title: "Navigation Bar",
    },
    {
      segment: "page",
      title: "Posts",
      icon: <AppsIcon />,
    },
  ];
  return (
    <div className="App">
      <AppProvider
        navigation={NAVIGATION}
        router={router}

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
