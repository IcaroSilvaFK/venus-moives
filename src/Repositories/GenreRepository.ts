import { Genres } from '@prisma/client';
import { prismaClient } from '../config/global/prisma';
import { IGenreRepository } from '../Interfaces/Repository/IGenreRepository';

export class GenreRepository implements IGenreRepository {
  async create(data: Genres): Promise<void> {
    await prismaClient.genres.create({
      data: data
    });
  }

  async findOne(genre: string): Promise<Genres | null> {
    return await prismaClient.genres.findFirst({
      where: {
        genre
      }
    });
  }

  async findAll(): Promise<Genres[]> {
    return await prismaClient.genres.findMany();
  }

  async destroy(id: string): Promise<void> {
    await prismaClient.genres.delete({
      where: {
        id
      }
    });
  }
}
