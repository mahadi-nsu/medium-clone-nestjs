import { UserType } from './userType.interface';

export interface UserResponseInterface {
  user: UserType & { token: string };
}
