import { UserDTO } from '../DTOInterface/UserDTO';

export interface IUserService {
  create: (data: UserDTO) => Promise<void>;
}
