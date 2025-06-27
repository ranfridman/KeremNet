import HomePage from "../HomePage/HomePage";
import UserPage from "../UsersPage/userPage";
import CreateAccountPage from "../CreateAccountPage/CreateAccountPage";               
import CreatePostPage from "../CreatePostPage/CreatePostPage";               

const Pages: Record<string, React.ReactElement> = {
  "/posts": <HomePage/>,
  "/users": <UserPage/>,
  "/createPost": <CreatePostPage />,
  "/createAccount": <CreateAccountPage />,
  "/profile": <div>Profile Page</div>,
};

export default Pages;
