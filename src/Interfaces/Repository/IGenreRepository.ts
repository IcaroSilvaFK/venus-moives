import { Genres } from '@prisma/client';

export interface IGenreRepository {
  create: (data: Genres) => Promise<void>;
  findOne(genre: string): Promise<Genres | null>;
  findAll: () => Promise<Genres[]>;
  destroy: (id: string) => Promise<void>;
}
