import { MovieDTO } from '../DTOInterface/MovieDTO';

export interface IMovieRepository {
  create: (data: MovieDTO) => Promise<void>;
  getAllMovies: () => Promise<MovieDTO[]>;
  getMoviesByTitle: (title: string) => Promise<MovieDTO>;
}
