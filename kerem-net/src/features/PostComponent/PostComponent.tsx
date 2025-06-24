import { useState } from "react";
import "./PostComponent.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  ListItemText,
  Avatar,
  Stack,
  ListItem,
  CardContent,
  Card,
  ListItemIcon,
  Typography,
  List,
} from "@mui/material";
import CommentSection, { CommentSectionProps } from "./CommentSection";
export interface PostComponentProps {
  text: string;
  comments: CommentSectionProps;
  likes: number;
  creatorName: string;
  date: string;
}

const PostComponent = (props: PostComponentProps) => {
  const [liked, setLiked] = useState(true);
  return (
    <Card className="post" variant="outlined">
      <>
        <ListItem sx={{ pl: 1 }}>
          <ListItemIcon>
            <Avatar alt={props.creatorName} src="/static/images/avatar/1.jpg" />
          </ListItemIcon>
          <ListItemText primary={props.creatorName} />
        </ListItem>
      </>
      <div className="post-content">
        <p className="post-text">{props.text}</p>
      </div>
      <CardContent>
        <div>
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ListItemIcon
              onClick={() => setLiked(!liked)}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {liked ? (
                <FavoriteBorderIcon className="post-likes"  />
              ) : (
                <FavoriteIcon className="post-likes" />
              )}
              <ListItemText sx={{ pl: 1 }} primary={`Likes: ${props.likes}`} />
            </ListItemIcon>

            <ListItemText
              primary={props.date}
              sx={{ textAlign: "right" }}
            />
          </Stack>
        </div>
        {/* <div className="post-date">Date: {props.date}</div> */}
      </CardContent>

      <CommentSection comments={props.comments.comments} />
    </Card>
  );
};

export default PostComponent;
