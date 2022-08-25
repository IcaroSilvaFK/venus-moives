import { Genres } from '@prisma/client';

export interface IGenreService {
  createGenre: (data: Genres) => Promise<void>;
  findAllGenres: () => Promise<any>;
  destroyGenre: (id: string) => Promise<void>;
}
