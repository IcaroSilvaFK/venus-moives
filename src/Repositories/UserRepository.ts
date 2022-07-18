import { UserDTO } from 'src/Interfaces/DTOInterface/UserDTO';
import { IModel } from 'src/Interfaces/ModelsInterface/IModel';
import { IUserRepository } from 'src/Interfaces/RepositoryInterface/IUserRepository';

export class UserRepository implements IUserRepository {
  constructor(private userModel: IModel<UserDTO>) {}

  async create(data: UserDTO): Promise<void> {
    await this.userModel.create({
      name: data.name,
      age: data.age,
      email: data.email,
      password: data.password
    });
  }
}
