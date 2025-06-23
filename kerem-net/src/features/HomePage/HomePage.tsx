import { useState } from "react";
import PostComponent,{ PostComponentProps   } from "../PostComponent/PostComponent";
import "./HomePage.css";
interface HomePageProps {
    initialPosts:PostComponentProps[]
}

const HomePage:React.FC<HomePageProps> = ({initialPosts}) => {
    const [posts, setPosts] = useState<PostComponentProps[]>(initialPosts);
    return (
        <div className="home-page">
            <div className="home-page-title">KEREM.NET</div>
            <div className="posts-container">
                {posts.map((post, index) => (
                    <PostComponent key={index} {...post} />
                ))}
            </div>

        </div>
    )
};

export default HomePage;