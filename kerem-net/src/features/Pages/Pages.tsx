import HomePage from "../HomePage/HomePage";
import UserPage from "../UsersPage/userPage";

const Pages: Record<string, React.ReactElement> = {
  "/posts": <HomePage/>,
  "/users": <UserPage/>,
  "/profile": <div>Profile Page</div>,
};

export default Pages;
