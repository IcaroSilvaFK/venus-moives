import { IUser } from '../DataInterface/IUser';

export interface IUserRepository {
  create: (data: IUser) => Promise<void>;
}
