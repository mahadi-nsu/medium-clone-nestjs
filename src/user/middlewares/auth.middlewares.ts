import { NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { JWT_SECRET } from 'src/config';
import { ExpressRequest } from 'src/types/expressRequest.interface';
import { verify } from 'jsonwebtoken';
import { UserService } from '../user.service';
import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: ExpressRequest, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }

    const token = req.headers.authorization.split(' ')[1];
    // console.log('token mama', token);
    try {
      const decode = await verify(token, JWT_SECRET);
      const user = await this.userService.findById(decode.id);
      console.log(user);
      req.user = user;
      next();
    } catch (error) {
      req.user = null;
      next();
    }
  }
}
