/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { v4 } from "uuid";
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import usersData from '../Data/users.json'
import { CreateUserDto } from "../Interfaces/CreateUserDto";
export interface User {
    id: string,
    username: string,
    biography: string,
    followers: string[],
    following: string[],
    liked: string[],
    password: string
}



@Injectable()
export class UsersService {
    private users: User[] = usersData as User[];

    getAllUsers():  Omit<User, 'password'>[] {
        return this.users.map(({ password, ...userWithoutPassword }) => userWithoutPassword);
    }

    getUserById(id: string): Omit<User, 'password'> {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        // Return user object without the password field
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }

    createUser({ biography, username, password }: CreateUserDto): User {
        if (this.getAllUsers().find(user => user.username === username)) {
            throw new BadRequestException(`User with username ${username} already exists`);
        }
        const newUser = {
            id: (v4() as string),
            followers: [],
            following: [],
            liked: [],
            username,
            password,
            biography
        };
        this.users.push(newUser);
        return newUser;
    }

    toggleFollow(userId: string, followerId: string) {
        const user = this.getUserById(userId);
        const follower = this.getUserById(followerId);
        if (!user || !follower) {
            throw new NotFoundException('Resource not found');
        }
        if (user.followers.includes(followerId)) {
            user.followers = user.followers.filter(id => id !== followerId);
            follower.following = follower.following.filter(id => id !== userId);
        } else {
            user.followers.push(followerId);
            follower.following.push(userId);
        }
        return follower;
    }

    updateUser(id: string, items: any) {
        const user = this.getUserById(id);
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        Object.assign(user, items);
        return user;
    }

    logIn(username: string, password: string) {
        const user = this.users.find(user => user.username === username && user.password === password);
        if (!user) {
            throw new NotFoundException(`User with username ${username} not found`);
        }
        return user                                                         
    }
}
