import { IGenre } from "@interfaces/data/IGenre";

export interface IGenreRepository {
  create: (data: IGenre) => Promise<void>;
  findOne(genre: string): Promise<IGenre>;
  findAll: () => Promise<any>;
  destroy: (id: string) => Promise<void>;
}
