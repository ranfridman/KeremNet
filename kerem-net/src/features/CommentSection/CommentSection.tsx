import { useState } from "react";
import Comment, { CommentProps } from "../Comment/Comment";
import {
  Collapse,
  ListItemButton,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export interface CommentSectionProps {
  comments: CommentProps[];
}

const CommentSection: React.FC<CommentSectionProps> = ({comments}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {comments.length > 0 && (
        <>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <RateReviewIcon />
            </ListItemIcon>
            <ListItemText primary={`${comments.length} Comments`} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open}>
            <List
              component="div"
              disablePadding
              sx={{ maxHeight: "25vh", overflow: "auto" }}
            >
              {comments.map((comment, index) => (
                <Comment key={index} {...comment} />
              ))}
            </List>
          </Collapse>
        </>
      )}
    </>
  );
};

export default CommentSection;
