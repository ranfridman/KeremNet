import HomePage, { HomePageProps } from "../HomePage/HomePage";
import UserPage from "../UsersPage/userPage";
import postsData from "../../Data/posts.json";
import usersData from "../../Data/users.json";
const posts: HomePageProps["initialPosts"] = postsData;


const Pages: Record<string, React.ReactElement> = {
  "/posts": <HomePage initialPosts={posts} />,
  "/users": <UserPage initialUsers={usersData} />,
  "/profile": <div>Profile Page</div>,
};

export default Pages;