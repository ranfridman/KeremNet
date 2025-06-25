/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body,Req } from '@nestjs/common';
import { UsersService, User } from './users.service';

export class CreateUserDto {
  username: string;
  biography: string;
}
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
    toggleFollow( @Body() body:{followerId: string, userId: string}): any {
        return this.usersService.toggleFollow(body.userId, body.followerId);
    }
    @Post()//Post /user
    createUser(@Body() user: CreateUserDto): User  {
        return this.usersService.createUser(user);
    }

}