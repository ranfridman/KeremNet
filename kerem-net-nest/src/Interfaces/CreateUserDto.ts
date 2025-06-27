/* eslint-disable prettier/prettier */

export class  CreateUserDto {
  username: string;
  password: string;
  biography: string;
}

export class LogInDto {
  username: string;
  password: string;
}