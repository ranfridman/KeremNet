import { useState, useEffect } from "react";
import User, { UserProps } from "../User/user";
import { Grid, TextField, Container, Card } from "@mui/material";
import "./UserPage.css";
import api from "../../Scripts/API/Api";

export interface UserPageProps {
  initialUsers: UserProps[];
}

const UserPage: React.FC<UserPageProps> = ({ initialUsers }) => {
  const [allUsers, setAllUsers] = useState(initialUsers);
  const [filteredUsers, setFilteredUsers] = useState(initialUsers);
  const [hasLoadedUsers, setHasLoadedUsers] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      api
        .get("/users")
        .then((res: any) => {
          console.log(res.data);
          setHasLoadedUsers(true);
          setFilteredUsers(res.data);
          setAllUsers(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1000);
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
        {filteredUsers.map((user, index) => (
          <User key={index} {...user} />
        ))}
      </Grid>
    </Container>
  );
};

export default UserPage;
