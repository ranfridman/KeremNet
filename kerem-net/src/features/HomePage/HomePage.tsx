import Post, { PostProps } from "../Post/Post";
import "./HomePage.css";
import { Box, CircularProgress, Switch } from "@mui/material";
import { useNotifications } from "@toolpad/core/useNotifications";
import useFetch from "../../Hooks/useFetch/useFetch";
import { useState } from "react";

const HomePage: React.FC = () => {
  const notifications = useNotifications();
  const [isFiltered, setFiltered] = useState(false);
  const { data, loading, error } = useFetch<PostProps[]>("/posts");
  return (
    <Box>
      {error &&
        notifications.show(error, {
          severity: "error",
          autoHideDuration: 1000,
        })}
      <div className="home-page">
        {loading && <CircularProgress />}
        <div className="posts-container">
          {(data ?? []).map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default HomePage;
