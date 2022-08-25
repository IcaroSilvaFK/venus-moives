import { prismaClient } from '../config/global/prisma';
import { Content } from '@prisma/client';

interface IcontentCreate extends Content {
  genres: string[];
}

export class ContentRepository {
  async create({ genres, ...rest }: IcontentCreate): Promise<void> {
    const { id } = await prismaClient.content.create({
      data: {
        ...rest
      }
    });

    for (let genre of genres) {
      await prismaClient.genres.create({
        data: {
          content_id: id,
          genre
        }
      });
    }
  }

  async findOne(title: string): Promise<Content | null> {
    return await prismaClient.content.findFirst({
      where: {
        title
      }
    });
  }

  async findAllContents(): Promise<any> {
    return await prismaClient.content.findMany();
  }

  async findContentsByGenre(genre: string): Promise<any> {
    return await prismaClient.content.findMany({
      where: {
        genres: {
          some: {
            genre
          }
        }
      }
    });
  }

  async destroy(id: string) {
    await prismaClient.content.delete({
      where: {
        id
      }
    });
  }

  async update({ ...rest }: Partial<IcontentCreate>, id: string) {
    await prismaClient.content.update({
      where: {
        id
      },
      data: {
        ...rest
      }
    });
  }
}
