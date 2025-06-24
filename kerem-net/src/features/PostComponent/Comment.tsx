import {
  ListItemButton,
  Avatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export interface CommentProps {
  commentContent: string;
  userName: string;
  date: string;
}

const Comment = (comment:CommentProps) => {
  return (
    <>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemIcon>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </ListItemIcon>
        <ListItemText primary={comment.commentContent} secondary={comment.date}/>
      </ListItemButton>
    </>
  );
};

export default Comment;
