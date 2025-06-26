import React from "react";
import type { Navigation } from "@toolpad/core/AppProvider";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

export const NAVIGATION: Navigation = [
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
