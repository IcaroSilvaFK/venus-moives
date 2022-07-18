import { MovieDTO } from 'src/Interfaces/DTOInterface/MovieDTO';
import { IMovieRepository } from 'src/Interfaces/RepositoryInterface/IMovieRepository';
import { IMovieService } from 'src/Interfaces/ServiceInterface/IMovieService';

export class MovieService implements IMovieService {
  constructor(private movieRepositort: IMovieRepository) {}

  async create(data: MovieDTO): Promise<void> {
    await this.movieRepositort.create(data);
  }
}
