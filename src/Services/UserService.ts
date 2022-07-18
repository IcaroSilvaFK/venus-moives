import { UserDTO } from 'src/Interfaces/DTOInterface/UserDTO';
import { IUserRepository } from 'src/Interfaces/RepositoryInterface/IUserRepository';
import { IUserService } from 'src/Interfaces/ServiceInterface/IUserService';

export class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  async create(data: UserDTO): Promise<void> {
    await this.userRepository.create(data);
  }
}
