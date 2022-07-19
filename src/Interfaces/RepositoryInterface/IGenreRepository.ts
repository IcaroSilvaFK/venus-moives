import { GenreDTO } from '../DTOInterface/GenreDTO';

export interface IGenreRepository {
  create: (data: GenreDTO) => Promise<void>;
}
