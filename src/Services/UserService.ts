import 'dotenv/config';
import { HttpError } from '@errors/HttpError';
import { IUser } from '@interfaces/data/IUser';
import { IUserRepository } from '@interfaces/repository/IUserRepository';
import { IUserService } from '@interfaces/service/IUserService';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  async createUser(data: IUser): Promise<void> {
    const pattern = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    const validEmail = pattern.test(data.email);
    if (!validEmail) throw new HttpError(400, 'invalid e-mail');

    const useralreadyexists = await this.userRepository.findOneByEmail(
      data.email
    );
    if (useralreadyexists) throw new HttpError(400, 'user already exists');

    if (data.password!.length < 8)
      throw new HttpError(400, 'assword must be at least 8 characters long');

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(data.password, salt);

    const _data = {
      name: data.name,
      age: data.age,
      email: data.email,
      password: hash
    };

    await this.userRepository.create(_data);
  }
  async login(data: IUser) {
    const pattern = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    const validEmail = pattern.test(data.email);
    if (!validEmail) throw new HttpError(400, 'invalid e-mail');

    const user = await this.userRepository.findOneByEmail(data.email);
    if (!user) throw new HttpError(400, 'invalid credentials');

    const validPassword = await bcrypt.compare(data.password, user.password);
    if (!validPassword) throw new HttpError(400, 'invalid credentials');

    const token = jwt.sign(
      {
        id: user.id,
        user: user.name
      },
      process.env['SECRET_KEY'] as string,
      { expiresIn: 86400 }
    );
    return token;
  }
}
