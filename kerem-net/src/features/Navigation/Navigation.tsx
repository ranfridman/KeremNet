import React from "react";
import type { Navigation } from "@toolpad/core/AppProvider";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
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
    segment: "createPost",
    title: "Create Post",
    icon: <EditNoteIcon />,
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
