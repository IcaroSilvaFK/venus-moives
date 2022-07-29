import { IUser } from '../Data/IUser';

export interface IUserService {
  create: (data: IUser) => Promise<void>;
}
