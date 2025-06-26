import { useState } from "react";
<<<<<<< HEAD
import PostComponent,{ PostComponentProps   } from "../PostComponent/PostComponent";
import "./HomePage.css";
import { Box } from "@mui/material";
interface HomePageProps {
    initialPosts:PostComponentProps[]
}

const HomePage:React.FC<HomePageProps> = ({initialPosts}) => {
    const [posts, setPosts] = useState<PostComponentProps[]>(initialPosts);
    return (
        <Box>
        <div className="home-page">
            <div className="home-page-title">KEREM.NET</div>
            <div className="posts-container">
                {posts.map((post, index) => (
                    <PostComponent key={index} {...post} />
                ))}
            </div>

         </div>
        </Box>
    )
};

export default HomePage;
=======
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
>>>>>>> post-component
