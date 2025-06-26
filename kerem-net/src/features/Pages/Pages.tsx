import HomePage, { HomePageProps } from "../HomePage/HomePage";
import UserPage from "../UsersPage/userPage";
import CreatePostPage from "../CreatePostPage/CreatePostPage";               

const posts: HomePageProps["initialPosts"] = [];


const Pages: Record<string, React.ReactElement> = {
  "/posts": <HomePage initialPosts={posts} />,
  "/users": <UserPage initialUsers={[]} />,
  "/createPost": <CreatePostPage />,
  "/profile": <div>Profile Page</div>,
};

export default Pages;
