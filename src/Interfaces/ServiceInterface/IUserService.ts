import { IUser } from '../DataInterface/IUser';

export interface IUserService {
  create: (data: IUser) => Promise<void>;
}
