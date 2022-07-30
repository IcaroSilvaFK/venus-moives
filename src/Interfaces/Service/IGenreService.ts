import { IGenre } from '../Data/IGenre';

export interface IGenreService {
  createGenre: (data: IGenre) => Promise<void>;
  findAllGenres: () => Promise<any>;
  destroyGenre: (id: string) => Promise<void>;
}
