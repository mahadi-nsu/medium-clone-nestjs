import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class UserService {
  async createUser() {
    return 'createuser from service';
  }
}
