import "./user.css";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import {
  Avatar,
  Card,
  Divider,
  ListItemText,
  ListItem,
  Stack,
  List,
  Paper,
  Typography,
  Chip,
} from "@mui/material";

export interface UserProps {
  userName: string;
  biography: string;
  followers: number;
  following: number;
  numberOfPosts: number;
  liked: number;
}

const User: React.FC<UserProps> = ({
  userName,
  biography,
  numberOfPosts,
  liked,
  followers,
  following,
}) => {
  return (
    <Card className="user scale" variant="elevation">
      <Stack direction={"row"} sx={{ pl: 1 }}>
        <ListItem>
          <Avatar alt={userName}></Avatar>
        </ListItem>
        <ListItem>
          <ListItemText primary={userName} secondary={biography} />
        </ListItem>
      </Stack>
      <Divider />
      <Card>
        <Paper className="user-info " component={Stack} direction="row"  alignItems={"space-between"} >
            <Chip variant="outlined" size="small" icon={<PushPinOutlinedIcon />} color="primary" label={`${followers} Follwers`} />
            <Chip variant="outlined" size="small" icon={<RemoveRedEyeOutlinedIcon />} color="primary" label={`${following} Following`} />
            <Chip variant="outlined" size="small" icon={<BookmarkBorderOutlinedIcon />} color="primary" label={`${numberOfPosts} Posts`} />
            <Chip variant="outlined" size="small" icon={<FavoriteBorderOutlinedIcon />} color="primary" label={`${liked} Likes`} />
        </Paper>
      </Card>
    </Card>
  );
};

export default User;
