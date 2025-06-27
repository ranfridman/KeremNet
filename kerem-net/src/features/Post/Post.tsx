import { useState } from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { PostContent } from "../PostContent/PostContent";

import {
  ListItemText,
  Avatar,
  Stack,
  ListItem,
  CardContent,
  Card,
  ListItemIcon,
} from "@mui/material";
import { CommentProps } from "../Comment/Comment";
import CommentSection from "../CommentSection/CommentSection";
import { stringAvatar } from "../../Scripts/Avatar/StringToAvatar";
import api from "../../Scripts/API/Api";
import { useSelector } from "react-redux";
import { RootState } from "../../Hooks/useAccount/store";
export interface PostProps {
  text: string;
  comments: CommentProps[];
  likes: string[];
  creatorName: string;
  date: string;
  id: string;
}

const Post: React.FC<PostProps> = ({
  creatorName,
  date,
  text,
  comments,
  likes,
  id,
}) => {
  const userId = useSelector((state: RootState) => state.account.id);
  const [liked, setLiked] = useState(likes.includes(userId));
  const [numberOfLikes, setNumberOfLikes] = useState(likes.length);

  const handleLike = (postId: string) => {
    api
      .post("/posts/like", { postId: postId, userId: userId })
      .then((response) => {
        setLiked(response.data.likes.includes(userId));
        setNumberOfLikes(response.data.likes.length);
      })
      .catch(() => {});
  };

  return (
    <Card className="post" variant="outlined">
      <>
        <ListItem sx={{ pl: 1 }}>
          <ListItemIcon>
            <Avatar {...stringAvatar(`${creatorName}`)} />
          </ListItemIcon>
          <ListItemText primary={creatorName} />
        </ListItem>
      </>

      <PostContent text={text} />
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
              onClick={() => handleLike(id)}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {!liked ? (
                <FavoriteBorderIcon className="post-likes" />
              ) : (
                <FavoriteIcon className="post-likes" />
              )}
              <ListItemText sx={{ pl: 1 }} primary={`Likes: ${numberOfLikes}`} />
            </ListItemIcon>

            <ListItemText primary={date} sx={{ textAlign: "right" }} />
          </Stack>
        </div>
      </CardContent>

      <CommentSection comments={comments} postId={id} />
    </Card>
  );
};

export default Post;
