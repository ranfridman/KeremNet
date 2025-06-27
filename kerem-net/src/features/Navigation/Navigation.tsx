import React from "react";
import type { Navigation } from "@toolpad/core/AppProvider";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useSelector } from "react-redux";
import { RootState } from "../../Hooks/useAccount/store";
// const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

export function NavigationConfig(): Navigation {
  const isLoggedIn = useSelector((state: RootState) => state.account.isLoggedIn);

  return [
    {
      kind: "header",
      title: "Main",
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
      kind: "divider" as const,
    },
    ...(isLoggedIn
      ? [
          {
            segment: "createPost",
            title: "Create Post",
            icon: <EditNoteIcon />,
          },
          {
            segment: "profile",
            title: "Profile",
            icon: <AccountCircleIcon />,
          },
        ]
      : []),
    ...(!isLoggedIn
      ? [
          {
            segment: "createAccount",
            title: "Create Account",
            icon: <ExitToAppIcon />,
          },
        ]
      : []),
  ];
}
