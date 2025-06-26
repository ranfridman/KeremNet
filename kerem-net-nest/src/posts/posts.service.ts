/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { v4 } from "uuid";
import { User, UsersService } from '../users/users.service';
import postsDate from '../Data/posts.json'
import { CreatePostDto } from './posts.controller';
import { NotFoundException } from '@nestjs/common';


export interface PostInfo {
    id: string,
    userId: string,
    text: string;
    comments: {
        commentContent: string;
        userName: string;
        date: string;
    }[],
    likes: string[];
    creatorName: string;
    date: string;
}
@Injectable()
export class PostsService {
    constructor(private usersService: UsersService) { }
    private posts: PostInfo[] = postsDate;
    getAllPosts(): PostInfo[] {
        return this.posts;
    }

    getPostById(id: string): PostInfo {
        const post = this.posts.find(post => post.id === id);
        if (!post) {
            throw new NotFoundException(`Post with id ${id} not found`);
        }
        return post;
    }
    createPost({userId, text, creatorName}: CreatePostDto): PostInfo {
        const newpost: PostInfo = {
            id: (v4() as string),
            userId: userId,
            text: text,
            comments: [],
            likes: [],
            creatorName: creatorName,
            date: new Date().toISOString()
        };
        this.posts.push(newpost);
        return newpost;
    }
    toggleLike(userId: string, postId: string): any {
        const user = this.usersService.getUserById(userId);
        const post = this.getPostById(postId);
        if (!user || !post || typeof post === 'string') {
            throw new NotFoundException('Resource not found');
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
