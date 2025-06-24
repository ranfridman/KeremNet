import { useState } from "react";
import PostComponent, {
  PostComponentProps,
} from "../PostComponent/PostComponent";
import "./HomePage.css";
import { Box } from "@mui/material";
export interface HomePageProps {
  initialPosts: PostComponentProps[];
}

const HomePage: React.FC<HomePageProps> = ({ initialPosts }) => {
  const [posts, setPosts] = useState<PostComponentProps[]>(initialPosts);
  return (
    <Box>
      <div className="home-page">
        <div className="posts-container">
          {posts.map((post, index) => (
            <PostComponent key={index} {...post} />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default HomePage;
