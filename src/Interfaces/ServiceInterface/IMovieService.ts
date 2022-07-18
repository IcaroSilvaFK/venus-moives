import { MovieDTO } from '../DTOInterface/MovieDTO';

export interface IMovieService {
  create: (data: MovieDTO) => Promise<void>;
}
