/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { v4 } from "uuid";
import { User, UsersService } from '../users/users.service';
import postsDate from '../Data/posts.json'


export interface PostInfo {
    id: string,
    userId: string,
    text: string;
    comments: {
        comments:
        {
            commentContent: string;
            userName: string;
            date: string;
        }[]
    };
    likes: string[];
    creatorName: string;
    date: string;
}
@Injectable()
export class PostsService {
    constructor(private usersService: UsersService) { }
    private posts: PostInfo[] = postsDate;
    getAllPosts(): PostInfo[] {
        console.log(this.posts);

        return this.posts;
    }

    getPostById(id: string): PostInfo | string {
        return this.posts.find(post => post.id === id) || 'Post was not found';
    }
    createPost(post: { text: string, userId: string, creatorName: string }): PostInfo {
        const newpost: PostInfo = {
            id: (v4() as string),
            userId: post.userId,
            text: post.text,
            comments: { comments: [] },
            likes: [],
            creatorName: post.creatorName,
            date: new Date().toISOString()
        };
        this.posts.push(newpost);
        return newpost;
    }
    toggleLike(userId: string, postId: string): any {
        const user: User | undefined = this.usersService.getUserById(userId);
        const post = this.getPostById(postId);
        if (!user || !post || typeof post === 'string') {
            return null;
        } else {
            if (user.liked.includes(postId)) {
                user.liked = user.liked.filter(id => id !== postId);
                post.likes = post.likes.filter(id => id !== userId);
            } else {
                user.liked.push(postId);
                post.likes.push(userId);
            }
            return post;
        }
    }

}
