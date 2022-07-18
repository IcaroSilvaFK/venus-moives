import { MovieDTO } from 'src/Interfaces/DTOInterface/MovieDTO';
import { IModel } from 'src/Interfaces/ModelsInterface/IModel';
import { IMovieRepository } from 'src/Interfaces/RepositoryInterface/IMovieRepository';

export class MovieRepository implements IMovieRepository {
  constructor(private movieModel: IModel<MovieDTO>) {}

  async create(data: MovieDTO): Promise<void> {
    await this.movieModel.create({
      title: data.title,
      country: data.country,
      director: data.director,
      language: data.language,
      plot: data.plot,
      poster: data.poster,
      released: data.released,
      runtime: data.runtime
    });
  }
}
