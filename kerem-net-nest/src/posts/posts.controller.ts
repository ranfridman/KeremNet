/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post,Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostInfo } from 'src/Interfaces/PostInfo';
import { CreatePostDto } from 'src/Interfaces/CreatePostDto';
import { LikePostDto } from 'src/Interfaces/LikePostDto';




@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Get()//Get Posts
    getAllPosts(): PostInfo[] {
        return this.postsService.getAllPosts();
    }

    @Get(':id')
    getPostById(@Param('id') id: string): PostInfo|string {
        return this.postsService.getPostById(id);
    }

    @Post()
    createPost(@Body() Post: CreatePostDto): PostInfo {
        return this.postsService.createPost(Post);
    }

    @Post("/like/")
    toggleLike(@Body() {postId, userId}: LikePostDto): any {
        return this.postsService.toggleLike(userId,postId);
    }

}
