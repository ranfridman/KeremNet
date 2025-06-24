import './PostComponent.css';
import { CardContent,Card} from '@mui/material';
import CommentSection,{CommentSectionProps} from './CommentSection';
export interface PostComponentProps {
    text: string;
    comments: CommentSectionProps;
    likes: number;
    creatorName: string;
    date: string;
}


const PostComponent = (props: PostComponentProps) => {
  return (
      <Card className="post" variant="outlined">

      <div className="post-content">
        <p className="post-text">{props.text}</p>
      </div>
       <CardContent>
        <div className="post-likes">Likes: {props.likes}</div>
        <div className="post-creator">Creator: {props.creatorName}</div>
        <div className="post-date">Date: {props.date}</div>
       </CardContent>

      <CommentSection comments={props.comments.comments} />
      </Card>
      
  );
};


export default PostComponent;