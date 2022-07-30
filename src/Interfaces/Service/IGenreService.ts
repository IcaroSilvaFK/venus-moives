import { IGenre } from '../Data/IGenre';

export interface IGenreService {
  createGenre: (data: IGenre) => Promise<void>;
  findGenre: (genre: string) => Promise<IGenre>;
  findAllGenres: () => Promise<any>;
  destroyGenre: (id: string) => Promise<void>;
}
