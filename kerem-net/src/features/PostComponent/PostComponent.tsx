import './PostComponent.css';
import { CardContent,Card } from '@mui/material';

interface PostComponentProps {
    text: string;
    comments: string[];
    likes: number;
    creatorName: string;
    date: string;
}

const PostComponent:React.FC<PostComponentProps> = ({text, comments, likes, creatorName, date}) => {
  return (
      <Card className="post" variant="outlined">

      <div className="post-content">
        <p className="post-text">{text}</p>
      </div>
       <CardContent>
        <div className="post-likes">Likes: {likes}</div>
        <div className="post-creator">Creator: {creatorName}</div>
        <div className="post-date">Date: {date}</div>
       </CardContent>
       {comments.length > 0 && <div className="post-comments">
       <div className="post-comments-title">Comments</div>
        {comments.map((comment, index) => (
          <div className="comment" key={index}>{comment}</div>
        ))}
      </div>}
      </Card>
  );
};


export default PostComponent;
export type { PostComponentProps };