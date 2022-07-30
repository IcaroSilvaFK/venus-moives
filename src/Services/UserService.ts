import { IUser } from 'src/Interfaces/Data/IUser';
import { IUserRepository } from 'src/Interfaces/Repository/IUserRepository';
import { IUserService } from 'src/Interfaces/Service/IUserService';

export class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  async createUser(data: IUser): Promise<void> {
    await this.userRepository.create(data);
  }
}
