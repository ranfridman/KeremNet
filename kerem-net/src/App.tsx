import React from "react";
import logo from "./logo.png";
import "./App.css";
import HomePage, { HomePageProps } from "./features/HomePage/HomePage";
import Data from "./Data/posts.json";
import { DemoProvider, useDemoRouter } from "@toolpad/core/internal";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UserPage from "./features/UsersPage/userPage";
function App() {
  const posts: HomePageProps["initialPosts"] = Data;
  const router = useDemoRouter("/posts");

  const NAVIGATION: Navigation = [
    {
      kind: "header",
      title: "Navigation Bar",
    },
    {
      segment: "posts",
      title: "Posts",
      icon: <DashboardIcon />,
    },
    {
      segment: "users",
      title: "Users",
      icon: <GroupIcon />,
    },
    {
      segment: "profile",
      title: "Profile",
      icon: <AccountCircleIcon />,
    },
  ];

  const pages: Record<string, React.ReactElement> = {
    "/posts": <HomePage initialPosts={posts} />,
    "/users": (
      <UserPage
        users={[
          { userName: "kerem", biography: "hello", numberOfPosts: 2, liked: 3 },
          { userName: "kerem", biography: "hello", numberOfPosts: 2, liked: 3 },
          { userName: "kerem", biography: "hello", numberOfPosts: 2, liked: 3 },
          { userName: "kerem", biography: "hello", numberOfPosts: 2, liked: 3 },
          { userName: "kerem", biography: "hello", numberOfPosts: 2, liked: 3 },
          { userName: "kerem", biography: "hello", numberOfPosts: 2, liked: 3 },
          { userName: "kerem", biography: "hello", numberOfPosts: 2, liked: 3 },
          { userName: "kerem", biography: "hello", numberOfPosts: 2, liked: 3 },
          { userName: "kerem", biography: "hello", numberOfPosts: 2, liked: 3 },
          { userName: "kerem", biography: "hello", numberOfPosts: 2, liked: 3 },
          { userName: "kerem", biography: "hello", numberOfPosts: 2, liked: 3 },
        ]}
      />
    ),
    // "/users": <div>sdf</div>,
  };

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
              style={{ width: "2.5em", height: "3em", margin: "0.5vh" }}
            />
          ),
        }}
      >
        <DashboardLayout>
          {pages[router.pathname as keyof typeof pages] ?? <div>404</div>}
        </DashboardLayout>
      </AppProvider>
    </div>
  );
}

export default App;
