import {
  ListItemButton,
  Avatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { stringAvatar } from "../../Scripts/Avatar/StringToAvatar";

export interface CommentProps {
  commentContent: string;
  userName: string;
  date: string;
}


const Comment: React.FC<CommentProps> = ({userName,commentContent,date}) => {

  return (
    <>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemIcon>
            <Avatar  {...stringAvatar(`${userName}`)}/>

    </ListItemIcon>
        <ListItemText primary={commentContent} secondary={date}/>
      </ListItemButton>
    </>
  );
};

export default Comment;
