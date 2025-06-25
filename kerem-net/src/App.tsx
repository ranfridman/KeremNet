import React from "react";
import logo from "./logo.png";
import "./App.css";
import HomePage, { HomePageProps } from "./features/HomePage/HomePage";
import UserPage from "./features/UsersPage/userPage";
import postsData from "./Data/posts.json";
import usersData from "./Data/users.json";
import { useDemoRouter } from "@toolpad/core/internal";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { AppProvider } from "@toolpad/core/AppProvider";

import { NAVIGATION } from "./features/Navigation/Navigation";
import { lightTheme, darkTheme } from "./features/Theme/themes";
function App() {
  const posts: HomePageProps["initialPosts"] = postsData;
  const router = useDemoRouter("/posts");

  const pages: Record<string, React.ReactElement> = {
    "/posts": <HomePage initialPosts={posts} />,
    "/users": <UserPage initialUsers={usersData} />,
    "/profile": <div>Profile Page</div>,
  };

  return (
    <div className="App">
      <AppProvider
        navigation={NAVIGATION}
        router={router}
        branding={{
          title: "KeremNet",
          logo: <img src={logo} alt="logo" className="app-logo" />,
        }}
        theme={{ dark: darkTheme, light: lightTheme }}
      >
        <DashboardLayout>
          {pages[router.pathname as keyof typeof pages] ?? <div>404</div>}
        </DashboardLayout>
      </AppProvider>
    </div>
  );
}

export default App;
