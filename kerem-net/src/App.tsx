import React from "react";
import logo from "./logo.png";
import "./App.css";
import { useDemoRouter } from "@toolpad/core/internal";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { AppProvider } from "@toolpad/core/AppProvider";
import Pages from "./features/Pages/Pages";
import { NAVIGATION } from "./features/Navigation/Navigation";
import { lightTheme, darkTheme } from "./features/Theme/themes";

function App() {
  const router = useDemoRouter("/posts");
  return (
    <div className="App">
      <AppProvider
        navigation={NAVIGATION}
        router={router}
        branding={{
          title: "KeremNet",
          logo: <img src={logo} alt="logo" className="app-logo" />,
        }}
        theme={{ dark: darkTheme, light: lightTheme }}>
        <DashboardLayout>
          {Pages[router.pathname] ?? <div>404</div>}
        </DashboardLayout>
      </AppProvider>


    </div>
  );
}

export default App;
