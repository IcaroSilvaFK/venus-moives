import { HttpError } from 'src/Exeptions/HttpError';
import { IUser } from 'src/Interfaces/Data/IUser';
import { IUserRepository } from 'src/Interfaces/Repository/IUserRepository';
import { IUserService } from 'src/Interfaces/Service/IUserService';

export class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  async createUser(data: IUser): Promise<void> {
    const useralreadyexists = await this.userRepository.findOneByEmail(
      data.email
    );
    if (useralreadyexists) throw new HttpError(400, 'user already exists');
    await this.userRepository.create(data);
  }
}
