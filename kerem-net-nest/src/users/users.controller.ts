/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService, User } from './users.service';

import { CreateUserDto,LogInDto } from '../Interfaces/CreateUserDto';
import { FollowUserDto } from '../Interfaces/FollowUserDto';                        
@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()//Get users
    getAllUsers():  Omit<User, "password"> [] {
        return this.usersService.getAllUsers();
    }

    @Get(':id') // Get users/:id
    getUserById(@Param('id') id: string): Omit<User, "password"> | undefined {
        return this.usersService.getUserById(id);
    }

    @Post("/follow")//Post /user
    toggleFollow(@Body() { followerId, userId }: FollowUserDto): any {
        return this.usersService.toggleFollow(userId, followerId);
    }
    @Post()//Post /user
    createUser(@Body() user: CreateUserDto): User  {
        return this.usersService.createUser(user);
    }
    @Get()//Post /user
    signInUder(@Body() {username, password}: LogInDto): User  {
        return this.usersService.logIn(username, password);
    }
}