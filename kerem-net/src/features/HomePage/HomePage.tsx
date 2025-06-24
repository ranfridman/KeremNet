import { useState } from "react";
import Post, {
  PostProps,
} from "../Post/Post";
import "./HomePage.css";
import { Box } from "@mui/material";
export interface HomePageProps {
  initialPosts: PostProps[];
}

const HomePage: React.FC<HomePageProps> = ({ initialPosts }) => {
  const [posts, setPosts] = useState<PostProps[]>(initialPosts);
  return (
    <Box>
      <div className="home-page">
        <div className="posts-container">
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default HomePage;
