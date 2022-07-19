import { GenreDTO } from 'src/Interfaces/DTOInterface/GenreDTO';
import { IModel } from 'src/Interfaces/ModelsInterface/IModel';
import { IGenreRepository } from 'src/Interfaces/RepositoryInterface/IGenreRepository';

export class GenreRepository implements IGenreRepository {
  constructor(private genreModel: IModel<GenreDTO>) {}

  async create(data: GenreDTO): Promise<void> {
    await this.genreModel.create({
      genre: data.genre,
      fk_movie_id: data.fk_movie_id
    });
  }
}
