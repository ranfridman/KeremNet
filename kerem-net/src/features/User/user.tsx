import {
  Avatar,
  Card,
  Divider,
  ListItemText,
  ListItem,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";

export interface UserProps {
  userName: string;
  biography: string;
  numberOfPosts: number;
  liked: number;
}

const User: React.FC<UserProps> = ({ userName, biography, numberOfPosts, liked }) => {
  return (
    <Card>
      <Stack direction={"row"} sx={{ pl: 1 }}>
        <ListItem>
          <Avatar alt={userName} src="/static/images/avatar/1.jpg"></Avatar>
        </ListItem>
        <ListItem>
          <ListItemText primary={userName} secondary={biography} />
        </ListItem>
      </Stack>
      <Divider />
      <Card>
        <ButtonGroup variant="text" aria-label="Basic button group">
          <Button >{`${numberOfPosts} Posts`}</Button>
          <Button>{`${liked} Likes`}</Button>
        </ButtonGroup>
      </Card>
    </Card>
  );
};

export default User;
