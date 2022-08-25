import { IUser } from '../Data/IUser';
import { Users } from '@prisma/client';
export interface IUserRepository {
  create: (data: Users) => Promise<Users>;
  findOneByEmail: (email: string) => Promise<Users>;
}
