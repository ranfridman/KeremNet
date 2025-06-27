import React, { useEffect } from "react";
import logo from "./logo.png";
import "./App.css";
import { useDemoRouter } from "@toolpad/core/internal";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { AppProvider } from "@toolpad/core/AppProvider";
import Pages from "./features/Pages/Pages";
import { NavigationConfig } from "./features/Navigation/Navigation";
import { lightTheme, darkTheme } from "./features/Theme/themes";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../src/Hooks/useAccount/store";
import { Session } from "@toolpad/core/AppProvider";
import SignIn from "./features/SignIn/SignIn";
import { logOut } from "./Hooks/useAccount/createSlice";
import { Navigation } from "@mui/icons-material";

function App() {
  const router = useDemoRouter("/posts");
  const userName = useSelector((state: RootState) => state.account.username);
  const userId = useSelector((state: RootState) => state.account.username);
  const isLoggedIn = useSelector((state: RootState) => state.account.isLoggedIn);
  const dispatch: AppDispatch = useDispatch();
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const [session, setSession] = React.useState<Session | null>(null);
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setOpenSignIn(true);
      },
      signOut: () => {
        setSession(null);
        dispatch(logOut());
      },
    };
  }, []); 
  useEffect(() => {
    if (isLoggedIn) {
      setSession({user:{ name:userName, id:userId }});      
    }
  }, [userName, userId]);

  return (
    <div className="App">
      <AppProvider
        authentication={authentication}
        session={session}
        navigation={NavigationConfig()}
        router={router}
        branding={{
          title: "KeremNet",
          logo: <img src={logo} alt="logo" className="app-logo" />,
        }}
        theme={{ dark: darkTheme, light: lightTheme }}
      >
        {<SignIn isSignInOpen={openSignIn} setOpenSignIn={setOpenSignIn}/>}
        <DashboardLayout>
          {Pages[router.pathname] ?? <div>404</div>}
        </DashboardLayout>
      </AppProvider>
    </div>
  );
}

export default App;
