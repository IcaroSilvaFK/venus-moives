import { IGenre } from '../Data/IGenre';

export interface IGenreRepository {
  create: (data: IGenre) => Promise<void>;
  getGenreByName(genre: string): Promise<IGenre>;
  getAllGenres: () => Promise<any>;
  deleteGenre: (id: string) => Promise<void>;
}
