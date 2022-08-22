import { IUser } from '@interfaces/data/IUser';
import { IModel } from '@interfaces/model/IModel';
import { IUserRepository } from '@interfaces/repository/IUserRepository';

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

  async findOneByEmail(email: string): Promise<IUser> {
    const user = await this.userModel.findOne({
      where: {
        email: email
      }
    });
    return user?.get() as IUser;
  }
}
