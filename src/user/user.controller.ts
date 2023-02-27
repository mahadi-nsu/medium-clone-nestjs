import { LoginDto } from './dto/userLogin.dto';
import { Controller, Post } from '@nestjs/common';
import { Body, Get, UsePipes, Req } from '@nestjs/common/decorators';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { UserResponseInterface } from './types/userResponse.interface';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ExpressRequest } from 'src/types/expressRequest.interface';
import { User } from './decorators/user.decorator';
import { UserEntity } from './user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  // user register
  @Post('users')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.createUser(createUserDto);
    return this.userService.buildUserResponse(user);
  }

  // user login
  @Post('users/login')
  @UsePipes(new ValidationPipe({ transform: true }))
  async userLogin(
    @Body('user') loginDto: LoginDto,
  ): Promise<UserResponseInterface> {
    // console.log('loginDto', loginDto);
    const user = await this.userService.login(loginDto);
    return this.userService.buildUserResponse(user);
  }

  // get current user
  @Get('user')
  async currentUser(
    @Req() request: ExpressRequest,
    @User() user: UserEntity,
  ): Promise<UserResponseInterface> {
    console.log('request data from decorator', user);
    return this.userService.buildUserResponse(request.user);
  }
}
