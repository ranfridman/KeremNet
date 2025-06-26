import React from "react";
import type { Navigation } from "@toolpad/core/AppProvider";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
    kind: "divider",
    
  },
  {
    segment: "profile",
    title: "Profile",
    icon: <AccountCircleIcon />,
  },
];
