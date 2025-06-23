import './PostComponent.css';

interface PostComponentProps {
    text: string;
    comments: string[];
    likes: number;
    creatorName: string;
    date: string;
}

const PostComponent:React.FC<PostComponentProps> = ({text, comments, likes, creatorName, date}) => {
  return (
    <div className="post">
      <div className="post-content">
        <p className="post-text">{text}</p>
      </div>
      <div className="post-info">
        <div className="post-likes">Likes: {likes}</div>
        <div className="post-creator">Creator: {creatorName}</div>
        <div className="post-date">Date: {date}</div>
      </div>
      <div className="post-comments">
        <div className="post-comments-title">Comments</div>
        {comments.map((comment, index) => (
          <div className="comment" key={index}>{comment}</div>
        ))}
      </div>
    </div>
  );
};


export default PostComponent;