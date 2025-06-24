import User, { UserProps } from "../User/user";
import { Stack, Container  } from "@mui/material";

export interface UserPageProps {
  users: UserProps[];
}

const UserPage: React.FC<UserPageProps> = ({ users }) => {
  return (
    <Container >
      <Stack spacing={2} direction={"row"} padding={3}   useFlexGap
        flexWrap="wrap">
        {users.map((user, index) => (
          <User key={index} {...user} />
        ))}
      </Stack>
    </Container >
  );
};

export default UserPage;
