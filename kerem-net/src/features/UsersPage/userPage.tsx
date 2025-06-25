import { useState } from "react";
import User, { UserProps } from "../User/user";
import { Grid, TextField, Container, Card } from "@mui/material";
import "./UserPage.css";
export interface UserPageProps {
  initialUsers: UserProps[];
}

const UserPage: React.FC<UserPageProps> = ({ initialUsers }) => {
  const [users, setUsers] = useState(initialUsers);

  return (
    <Container className="users-page">
      <Card className="filter-section">
        <TextField
          label="Enter username"
          variant="outlined"
          onChange={(e) => {
            setUsers(
              initialUsers.filter((user) =>
                user.userName
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              )
            );
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
        {users.map((user, index) => (
          <User key={index} {...user} />
        ))}
      </Grid>
    </Container>
  );
};

export default UserPage;
