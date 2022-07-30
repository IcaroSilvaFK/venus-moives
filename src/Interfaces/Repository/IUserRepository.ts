import { IUser } from '../Data/IUser';

export interface IUserRepository {
  create: (data: IUser) => Promise<void>;
  findOneByEmail: (email: string) => Promise<IUser>;
}
