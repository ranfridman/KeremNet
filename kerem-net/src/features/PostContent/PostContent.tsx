import "./PostContent.css";
import { ListItemText } from "@mui/material";

interface PostContentProps {
  text: string;
}

const PostContent: React.FC<PostContentProps> = ({ text }) => {
  return (
    <div className="post-content">
      <ListItemText className="post-text" primary={text} />
    </div>
  );
};

export { PostContent };
export type { PostContentProps };
