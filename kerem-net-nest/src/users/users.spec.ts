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
        console.log("Hi")
    });

    describe('getAllUsers', () => {
        it('should return an array of users', () => {
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
        });
    });

})