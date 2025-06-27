import "./user.css";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import {
  Avatar,
  Card,
  Divider,
  ListItemText,
  ListItem,
  Stack,
  Paper,
  Chip,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { stringAvatar } from "../../Scripts/Avatar/StringToAvatar";
import React from "react";
import OptionMenu from "../OptionMenu/OptionMenu";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Hooks/useAccount/store";
import api from "../../Scripts/API/Api";
import { setUserInfo } from "../../Hooks/useAccount/createSlice";

export interface UserProps {
  id: string;
  username: string;
  biography: string;
  followers: string[];
  following: string[];
  numberOfPosts: number;
  liked: string[];
}

const User: React.FC<UserProps> = ({
  username,
  id,
  biography,
  numberOfPosts = 3,
  liked,
  followers,
  following,
}) => {
  const followingFromStore = useSelector(
    (state: RootState) => state.account.following
  );

  const isLoggedIn = useSelector(
    (state: RootState) => state.account.isLoggedIn
  );
  const userId = useSelector((state: RootState) => state.account.id);
  const dispatch: AppDispatch = useDispatch();

  const handleFollowToggle = (userToFollowId: string) => {
    api
      .post("/users/follow", { followerId: userId, userId: userToFollowId })
      .then((response) => {
        dispatch(setUserInfo(response.data));
        console.log(response.data);
      })
      .catch(() => {});
  };

  return (
    <Card className=" scale" variant="elevation">
      {isLoggedIn &&
        (!followingFromStore.includes(id) ? (
          <OptionMenu
            optionsMenu={[
              {
                label: "Follow",
                option: () => {
                  handleFollowToggle(id);
                },
              },
            ]}
          />
        ) : (
          <OptionMenu
            optionsMenu={[
              {
                label: "Unfollow",
                option: () => {
                  handleFollowToggle(id);
                },
              },
            ]}
          />
        ))}

      <Box className="user">
        <Stack direction={"row"} sx={{ pl: 1 }}>
          <ListItem>
            <Avatar {...stringAvatar(`${username}`)} />
          </ListItem>
          <ListItem>
            <ListItemText primary={username} secondary={biography} />
          </ListItem>
        </Stack>
        <Divider />
        <Card>
          <Paper
            className="user-info "
            component={Stack}
            direction="row"
            alignItems={"space-between"}
          >
            <Chip
              variant="outlined"
              size="small"
              icon={<PushPinOutlinedIcon />}
              color="primary"
              label={`${followers.length} Follwers`}
            />
            <Chip
              variant="outlined"
              size="small"
              icon={<RemoveRedEyeOutlinedIcon />}
              color="primary"
              label={`${following.length} Following`}
            />
            <Chip
              variant="outlined"
              size="small"
              icon={<BookmarkBorderOutlinedIcon />}
              color="primary"
              label={`${numberOfPosts} Posts`}
            />
            <Chip
              variant="outlined"
              size="small"
              icon={<FavoriteBorderOutlinedIcon />}
              color="primary"
              label={`${liked.length} Likes`}
            />
          </Paper>
        </Card>
      </Box>
    </Card>
  );
};

export default User;
