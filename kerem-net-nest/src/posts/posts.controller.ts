/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post,Body } from '@nestjs/common';
import { PostsService, PostInfo } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Get()//Get Posts
    getAllPosts(): PostInfo[] {
        return this.postsService.getAllPosts();
    }

    @Get(':id') // Get Posts/:id
    getPostById(@Param('id') id: string): PostInfo|string {
        return this.postsService.getPostById(id);
    }

    @Post()//Post /Post
    createPost(@Body() Post: { userId: string, text: string, creatorName: string }): PostInfo {
        return this.postsService.createPost(Post);
    }

    @Post("/like/")//Post /user
    toggleFollow(@Body() body: {userId: string ,postId: string}): any {
        return this.postsService.toggleLike(body.userId,body.postId);
    }

}
