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

const Comment: React.FC<CommentProps> = (comment) => {
  return (
    <>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemIcon>
            <Avatar alt={comment.userName} src="/static/images/avatar/1.jpg" />
    </ListItemIcon>
        <ListItemText primary={comment.commentContent} secondary={comment.date}/>
      </ListItemButton>
    </>
  );
};

export default Comment;
