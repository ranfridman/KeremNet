import HomePage, { HomePageProps } from "../HomePage/HomePage";
import UserPage from "../UsersPage/userPage";
import axios from "axios";

const posts: HomePageProps["initialPosts"] = [];


const Pages: Record<string, React.ReactElement> = {
  "/posts": <HomePage initialPosts={posts} />,
  "/users": <UserPage initialUsers={[]} />,
  "/profile": <div>Profile Page</div>,
};

export default Pages;
