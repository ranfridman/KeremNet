import { useState } from "react";
import "./Post.css";
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
} from "@mui/material";
import CommentSection, {
  CommentSectionProps,
} from "../CommentSection/CommentSection";
export interface PostProps {
  text: string;
  comments: CommentSectionProps;
  likes: number;
  creatorName: string;
  date: string;
}

const Post: React.FC<PostProps> = ({
  creatorName,
  date,
  text,
  comments,
  likes,
}) => {
  const [liked, setLiked] = useState(true);
  return (
    <Card className="post" variant="outlined">
      <>
        <ListItem sx={{ pl: 1 }}>
          <ListItemIcon>
            <Avatar alt={creatorName} />
          </ListItemIcon>
          <ListItemText primary={creatorName} />
        </ListItem>
      </>
      <div className="post-content">
        <ListItemText className="post-text" primary={text} />
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
                <FavoriteBorderIcon className="post-likes" />
              ) : (
                <FavoriteIcon className="post-likes" />
              )}
              <ListItemText sx={{ pl: 1 }} primary={`Likes: ${likes}`} />
            </ListItemIcon>

            <ListItemText primary={date} sx={{ textAlign: "right" }} />
          </Stack>
        </div>
      </CardContent>

      <CommentSection comments={comments.comments} />
    </Card>
  );
};

export default Post;
