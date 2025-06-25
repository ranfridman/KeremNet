/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { v4 } from "uuid";
import { Injectable } from '@nestjs/common';
import usersDate from '../Data/users.json'
import { CreateUserDto } from "./users.controller";
export interface User {
    id: string,
    username: string,
    biography: string,
    followers: string[],
    following: string[],
    liked: string[]
}



@Injectable()
export class UsersService {
    private users: User[] = usersDate as User[];

    getAllUsers(): User[] {
        return this.users;
    }

    getUserById(id: string): User | undefined {
        return this.users.find(user => user.id === id);
    }

    createUser({biography, username}: CreateUserDto): User {
        const newUser = {
            id: (v4() as string),
            followers: [],
            following: [],
            liked: [],
            username: username,
            biography: biography
        } as User;
        
        this.users.push(newUser);
        return newUser;
    }

    toggleFollow(userId: string, followerId: string) {
        // Example implementation to use the parameters and avoid unused variable errors
        console.log(userId, followerId  );
        
        const user = this.getUserById(userId);
        const follower = this.getUserById(followerId);
        if (!user || !follower) {
            return null;
        }
        if (user.followers.includes(followerId)) {
            user.followers = user.followers.filter(id => id !== followerId);
            follower.following = follower.following.filter(id => id !== userId);
        } else {
            user.followers.push(followerId);
            follower.following.push(userId);
        }

        return { user, follower };
    }

    updateUser(id: string, items: any) {
        const user = this.getUserById(id);
        if (!user) {
            return null;
        }
        Object.assign(user, items);
        return user;
    }
}
