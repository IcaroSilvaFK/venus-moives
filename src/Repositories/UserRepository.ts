import { IUser } from 'src/Interfaces/Data/IUser';
import { IModel } from 'src/Interfaces/Model/IModel';
import { IUserRepository } from 'src/Interfaces/Repository/IUserRepository';

export class UserRepository implements IUserRepository {
  constructor(private userModel: IModel<IUser>) {}

  async create(data: IUser): Promise<void> {
    await this.userModel.create({
      name: data.name,
      age: data.age,
      email: data.email,
      password: data.password
    });
  }
}
