import { UserDTO } from '../DTOInterface/UserDTO';

export interface IUserRepository {
  create: (data: UserDTO) => Promise<void>;
}
