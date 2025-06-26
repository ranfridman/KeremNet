import { useEffect, useState } from "react";
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
import useFetch from "../../Hooks/useFetch/useFetch";

export interface UserPageProps {
  initialUsers: UserProps[];
}

const UserPage: React.FC = () => {
  const [filteredUsers, setFilteredUsers] = useState([] as UserProps[]);
  const notifications = useNotifications();
  const { data, loading, error } = useFetch("/users");

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFilteredUsers(
      ((data ?? []) as UserProps[]).filter((user) =>
        user.username.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setFilteredUsers((data ?? []) as UserProps[]);
  }, [data]);

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
        {loading && <CircularProgress /> }
        {filteredUsers.map((user, index) => (
          <User key={index} {...user} />
        ))}
      </Grid>
      {error &&
        notifications.show(error, {
          severity: "error",
          autoHideDuration: 1000,
        })}
    </Container>
  );
};

export default UserPage;
