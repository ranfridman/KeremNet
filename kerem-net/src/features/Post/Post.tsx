import './Post.css';
import { CardContent,Card} from '@mui/material';
import CommentSection,{CommentSectionProps} from '../CommentSection/CommentSection';
export interface PostProps {
    text: string;
    comments: CommentSectionProps;
    likes: number;
    creatorName: string;
    date: string;
}


const Post: React.FC<PostProps> = ({text,likes,creatorName,date,comments}) => {
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

      <CommentSection comments={comments.comments} />
      </Card>
      
  );
};


export default Post;