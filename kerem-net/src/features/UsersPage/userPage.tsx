import { useState, useEffect } from "react";
import User, { UserProps } from "../User/user";
import {
  Grid,
  TextField,
  Container,
  Card,
  CircularProgress,
} from "@mui/material";
import "./UserPage.css";
import api from "../../Scripts/API/Api";
import { useNotifications } from "@toolpad/core/useNotifications";

export interface UserPageProps {
  initialUsers: UserProps[];
}

const UserPage: React.FC<UserPageProps> = ({ initialUsers }) => {
  const [allUsers, setAllUsers] = useState(initialUsers);
  const [filteredUsers, setFilteredUsers] = useState(initialUsers);
  const [hasLoadedUsers, setHasLoadedUsers] = useState<boolean>(false);
  const notifications = useNotifications();

  useEffect(() => {
    const id = setTimeout(() => {
      api
        .get("/users")
        .then((res: any) => {
          console.log(res.data);
          setHasLoadedUsers(true);
          setFilteredUsers(res.data);
          setAllUsers(res.data);
        })
        .catch((error) => {
          notifications.show(error.message, { severity: "error" });
        });
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFilteredUsers(
      allUsers.filter((user) =>
        user.username.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <Container className="users-page">
      <Card className="filter-section">
        <TextField
          label="Enter username"
          variant="outlined"
          onChange={(e) => {
            handleTextChange(e);
          }}
        />
      </Card>

      <Grid
        className="users-grid"
        spacing={2}
        direction="row"
        flexWrap="wrap"
        sx={{ padding: 2, gap: 2 }}
      >
        {!hasLoadedUsers && <CircularProgress />}
        {filteredUsers.map((user, index) => (
          <User key={index} {...user} />
        ))}
      </Grid>
    </Container>
  );
};

export default UserPage;
