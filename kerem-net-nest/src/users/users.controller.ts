/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService, User } from './users.service';
import { CreateUserDto } from 'src/Interfaces/CreateUserDto';
import { FollowUserDto } from 'src/Interfaces/FollowUserDto';


@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()//Get users
    getAllUsers(): User[] {
        return this.usersService.getAllUsers();
    }

    @Get(':id') // Get users/:id
    getUserById(@Param('id') id: string): User | undefined {
        return this.usersService.getUserById(id);
    }

    @Post("/follow")//Post /user
    toggleFollow( @Body() {followerId, userId}:FollowUserDto): any {
        return this.usersService.toggleFollow(userId, followerId);
    }
    @Post()//Post /user
    createUser(@Body() user: CreateUserDto): User  {
        return this.usersService.createUser(user);
    }

}