import {
  Avatar,
  Card,
  Chip,
  Container,
  Divider,
  ListItemText,
  Box,
  Stack,
  CircularProgress,
} from "@mui/material";
import { stringAvatar } from "../../Scripts/Avatar/StringToAvatar";
import { useSelector } from "react-redux";
import { RootState } from "../../Hooks/useAccount/store";
import "./ProfilePage.css";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { useEffect, useState } from "react";
import Post, { PostProps } from "../Post/Post";
import useFetch from "../../Hooks/useFetch/useFetch";

const ProfilePage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const { data, loading, error } = useFetch<PostProps[]>("/posts");

  const username = useSelector((state: RootState) => state.account.username);
  const biography = useSelector((state: RootState) => state.account.biography);
  const followers = useSelector((state: RootState) => state.account.followers);
  const following = useSelector((state: RootState) => state.account.following);
  const liked = useSelector((state: RootState) => state.account.following);

  useEffect(() => {
    if (data) {
      setPosts(data.filter((post) => post.creatorName === username));
    }
  }, [data]);

  return (
    <Container className="user-profile-page">
      <Card variant="outlined">
        <Stack>
          <Card className="user-info-card" >
            <Stack
              direction={"row"}
              sx={{ pl: 1 }}
              className="user-info-header"
            >
              <Avatar
                {...stringAvatar(`${username}`)}
                sx={{
                  width: 100,
                  height: 100,
                  ...(stringAvatar(`${username}`).sx || {}),
                }}
              />
              <ListItemText primary={username} secondary={biography} />
            </Stack>
            <Box className="user-details ">
              <Chip
                size="small"
                variant="outlined"
                icon={<PushPinOutlinedIcon />}
                color="primary"
                label={`${followers.length} Follwers`}
              />
              <Chip
                size="small"
                variant="outlined"
                icon={<RemoveRedEyeOutlinedIcon />}
                color="primary"
                label={`${following.length} Following`}
              />
              <Chip
                size="small"
                variant="outlined"
                icon={<BookmarkBorderOutlinedIcon />}
                color="primary"
                label={`${posts.length} Posts`}
              />
              <Chip
                size="small"
                variant="outlined"
                icon={<FavoriteBorderOutlinedIcon />}
                color="primary"
                label={`${liked.length} Likes`}
              />
            </Box>
            <Divider />
            <Stack direction={"row"}></Stack>
          </Card>
        </Stack>
        <Divider />

        <Box className="posts-container"  bgcolor={"background.paper"}>
          {loading && <CircularProgress />}

          {posts.map((post, idx) => (
            <Post key={idx} {...post} />
          ))}
        </Box>
      </Card>
    </Container>
  );
};

export default ProfilePage;
