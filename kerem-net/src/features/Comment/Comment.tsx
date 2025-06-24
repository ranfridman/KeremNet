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

const Comment: React.FC<CommentProps> = ({userName,commentContent,date}) => {
  return (
    <>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemIcon>
            <Avatar alt={userName} src="/static/images/avatar/1.jpg" />
    </ListItemIcon>
        <ListItemText primary={commentContent} secondary={date}/>
      </ListItemButton>
    </>
  );
};

export default Comment;
