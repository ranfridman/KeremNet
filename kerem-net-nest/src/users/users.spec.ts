/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
    let usersController: UsersController
    let usersService: UsersService

    beforeEach(() => {
        usersService = new UsersService();
        usersController = new UsersController(usersService);
    });

    describe('getAllUsers', () => {
        it('should return an array of users', async () => {
            const result = [
                {
                    "id": "1",
                    "username": "hgfhfg",
                    "biography": "hello",
                    "liked": [],
                    "followers": [],
                    "following": []
                },
                {
                    "id": "21",
                    "username": "hgfhfg",
                    "biography": "hello",
                    "liked": [],
                    "followers": [],
                    "following": []
                }
            ];
            jest.spyOn(usersService, 'getAllUsers').mockImplementation(() => result);
            expect(await usersController.getAllUsers()).toBe(result);

        });
    });

    describe('createUser', () => {
        it('should create new user and return a user object', async () => {
            const result = {
                id: "1",
                username: "testuser",
                biography: "test bio",
                liked: [],
                followers: [],
                following: [],
                password: "testpass"
            };
            jest.spyOn(usersService, 'createUser').mockImplementation(() => result);
            expect(await usersController.createUser({ username: "testuser", biography: "test bio", password: "testpass"  })).toBe(result);
        });
    });

        describe('signInUser', () => {
        it('should Sign in the user', async () => {
            const userResult = {
                id: "1",
                username: "testuser",
                biography: "test bio",
                liked: [],
                followers: [],
                following: [],
                password: "testpass"
            };
            jest.spyOn(usersService, 'logIn').mockImplementation((_username: string, _password: string) => {
                return userResult;
            });
            expect(await usersController.signInUder({ username: "testuser", password: "testpass" })).toBe(userResult);
        });
    });


    

});