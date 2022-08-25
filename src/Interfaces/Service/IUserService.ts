import { IUser } from '../Data/IUser';

export interface IUserService {
  createUser: (data: IUser) => Promise<void>;
}
