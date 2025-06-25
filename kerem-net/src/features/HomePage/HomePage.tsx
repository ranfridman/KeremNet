import { useState, useEffect } from "react";
import Post, { PostProps } from "../Post/Post";
import "./HomePage.css";
import { Box, CircularProgress } from "@mui/material";
import api from "../../Scripts/API/Api";
import { useNotifications } from "@toolpad/core/useNotifications";

export interface HomePageProps {
  initialPosts: PostProps[];
}

const HomePage: React.FC<HomePageProps> = ({ initialPosts }) => {
  const notifications = useNotifications();
  const [posts, setPosts] = useState<PostProps[]>(initialPosts);
  const [hasLoadedPosts, setHasLoadedPosts] = useState<boolean>(false);

  useEffect(() => {
    const id = setTimeout(() => {
      api
      .get("/posts")
      .then((res: any) => {
        console.log(res.data);
        setHasLoadedPosts(true);
        setPosts(res.data);
      })
      .catch((error) => {
        notifications.show(error.message, { severity: "error" });
      });
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <Box>
      <div className="home-page">
        {!hasLoadedPosts && <CircularProgress />}
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
