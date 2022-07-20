import { IUser } from 'src/Interfaces/DataInterface/IUser';
import { IUserRepository } from 'src/Interfaces/RepositoryInterface/IUserRepository';
import { IUserService } from 'src/Interfaces/ServiceInterface/IUserService';

export class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  async create(data: IUser): Promise<void> {
    await this.userRepository.create(data);
  }
}
