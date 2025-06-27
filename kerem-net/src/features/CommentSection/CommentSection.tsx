import { useState } from "react";
import Comment, { CommentProps } from "../Comment/Comment";

import {
  Collapse,
  ListItemButton,
  List,
  ListItemIcon,
  ListItemText,
  TextField,
  ListItem,
  Button,
  Divider,
} from "@mui/material";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AddIcon from "@mui/icons-material/Add";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
import { RootState } from "../../Hooks/useAccount/store";
import api from "../../Scripts/API/Api";
export interface CommentSectionProps {
  comments: CommentProps[];
  postId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  comments,
  postId,
}) => {
  const userId = useSelector((state: RootState) => state.account.id);
  const [isOpenAllComments, setIsOpenAllComments] = useState(false);
  const [isCreateCommentOpen, setIsCreateCommentOpen] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const [allComments, setAllComments] = useState(comments);
  const sendNewComment = () => {
    api
      .post("/posts/comment", { postId, userId, commentContent })
      .then((response) => {
        console.log(response.data.comments);
        setAllComments(response.data.comments);
        setIsCreateCommentOpen(!isCreateCommentOpen);
        setIsOpenAllComments(!isOpenAllComments);
      })
      .catch(() => {});
  };

  const handleClick = () => {
    if (allComments.length === 0) {
      setIsCreateCommentOpen(!isCreateCommentOpen);
    } else setIsOpenAllComments(!isOpenAllComments);
  };

  const handleNewComment = () => {
    if (commentContent !== "") {
      sendNewComment();
    }
  };

  return (
    <>
      {
        <>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <RateReviewIcon />
            </ListItemIcon>
            {allComments.length > 0 && (
              <>
                <ListItemText primary={`${allComments.length} Comments`} />
                {isOpenAllComments ? <ExpandLess /> : <ExpandMore />}
              </>
            )}
            {allComments.length === 0 && (
              <>
                <ListItemText secondary={`Write the first comment`} />
                {isCreateCommentOpen ? <CloseIcon /> : <AddIcon />}
              </>
            )}
          </ListItemButton>
          <Collapse in={isOpenAllComments}>
            <List
              component="div"
              disablePadding
              sx={{ maxHeight: "25vh", overflow: "auto" }}
            >
              {allComments.map((comment, index) => (
                <Comment key={index} {...comment} />
              ))}
            </List>
            <ListItemButton onClick={() => setIsCreateCommentOpen((state) => !state)}>
              <ListItemText secondary={`Write the first comment`} />
              {isCreateCommentOpen ? <CloseIcon /> : <AddIcon />}
            </ListItemButton>
          </Collapse>
          <Collapse in={isCreateCommentOpen}>
          <Divider/>
            <List
              component="div"
              disablePadding
              sx={{ maxHeight: "25vh", overflow: "auto" }}
            >
              <ListItem>
                <TextField
                  fullWidth
                  required
                  onChange={(e) => setCommentContent(e.target.value)}
                  variant="standard"
                  label="Write a comment"
                ></TextField>

                <Button variant="outlined" onClick={() => handleNewComment()}>
                  <SendIcon />{" "}
                </Button>
              </ListItem>
            </List>
          </Collapse>
        </>
      }
    </>
  );
};

export default CommentSection;
