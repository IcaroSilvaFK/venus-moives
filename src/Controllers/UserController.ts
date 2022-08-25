import { Request, Response } from 'express-serve-static-core';
import { UserRepository } from '../Repositories/UserRepository';
import { UserService } from '../Services/UserService';
import { Users } from '@prisma/client';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

export class UserController {
  async login(req: Request, res: Response) {
    const { email, password }: Users = req.body;
    try {
      const token = await userService.login({ email, password });
      return res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async store(req: Request, res: Response) {
    const { age, email, name, password }: Users = req.body;
    try {
      await userService.createUser({ age, email, name, password });
      return res.status(201).json({ status_code: 201, message: 'ok' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }
}
