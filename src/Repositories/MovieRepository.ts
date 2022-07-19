import { GenreDTO } from 'src/Interfaces/DTOInterface/GenreDTO';
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

  async getAllMovies(): Promise<MovieDTO[]> {
    const movies = await this.movieModel.findAll();
    return movies as unknown as MovieDTO[];
  }

  async getMoviesByTitle(title: string): Promise<MovieDTO> {
    const movie = await this.movieModel.findOne({ where: { title: title } });
    return movie?.get() as MovieDTO;
  }
}
