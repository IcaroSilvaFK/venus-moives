import { IGenre } from "@interfaces/data/IGenre";

export interface IGenreService {
  createGenre: (data: IGenre) => Promise<void>;
  findAllGenres: () => Promise<any>;
  destroyGenre: (id: string) => Promise<void>;
}
