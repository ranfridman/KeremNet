import {
  ListItemButton,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export interface CommentProps {
  commentContent: string;
}

const Comment = (comment:CommentProps) => {
  return (
    <>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary={comment.commentContent} />
      </ListItemButton>
    </>
  );
};

export default Comment;
