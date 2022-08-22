import { Request, Response } from 'express-serve-static-core';
import { IUser } from '@interfaces/data/IUser';
import { User } from '@models/User';
import { UserRepository } from '@repositories/UserRepository';
import { UserService } from '@services/UserService';

const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);

export class UserController {
  async login(req: Request, res: Response) {
    const data: IUser = req.body;
    try {
      const token = await userService.login(data);
      return res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async store(req: Request, res: Response) {
    const data: IUser = req.body;
    try {
      await userService.createUser(data);
      return res.status(201).json({ status_code: 201, message: 'ok' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }
}
