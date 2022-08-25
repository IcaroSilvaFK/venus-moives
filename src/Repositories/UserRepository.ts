import { IUserRepository } from '../Interfaces/Repository/IUserRepository';
import { Users } from '@prisma/client';
import { prismaClient } from 'config/global/prisma';

export class UserRepository {
  async create(data: Users): Promise<Users> {
    return await prismaClient.users.create({
      data: data
    });
  }

  async findOneByEmail(email: string): Promise<Users | null> {
    return await prismaClient.users.findFirst({
      where: {
        email
      }
    });
  }
}
