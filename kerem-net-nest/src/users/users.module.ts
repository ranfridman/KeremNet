/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/Interfaces/CreateUserDto';
import { FollowUserDto } from 'src/Interfaces/FollowUserDto';
@Module({
    imports: [CreateUserDto,FollowUserDto],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],    
})
export class UsersModule {



}
