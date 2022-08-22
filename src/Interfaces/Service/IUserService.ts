import { IUser } from '@interfaces/data/IUser';

export interface IUserService {
  createUser: (data: IUser) => Promise<void>;
}
