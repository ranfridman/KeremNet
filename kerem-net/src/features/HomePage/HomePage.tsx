import { useState,useEffect } from "react";
import Post, {
  PostProps,
} from "../Post/Post";
import "./HomePage.css";
import { Box,CircularProgress } from "@mui/material";
import api from "../../Scripts/API/Api";

export interface HomePageProps {
  initialPosts: PostProps[];
}

const HomePage: React.FC<HomePageProps> = ({ initialPosts }) => {
  const [posts, setPosts] = useState<PostProps[]>(initialPosts);
  const [hasLoadedPosts, setHasLoadedPosts] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      
      api
        .get("/posts")
        .then((res: any) => {
          console.log(res.data);
          setHasLoadedPosts(true);
          setPosts(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1000);
  }, []);   

  return (
    <Box>
      <div className="home-page">
        {!hasLoadedPosts && (<CircularProgress />)}
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
