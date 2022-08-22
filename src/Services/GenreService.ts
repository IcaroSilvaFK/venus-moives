import { HttpError } from '@errors/HttpError';
import { IGenre } from '@interfaces/data/IGenre';
import { IGenreRepository } from '@interfaces/repository/IGenreRepository';
import { IGenreService } from '@interfaces/service/IGenreService';

export class GenreService implements IGenreService {
  constructor(private genreRepository: IGenreRepository) {}
  async hasEmptyFields(data: IGenre) {
    return Object.values(data)
      .map((values) => !!values)
      .includes(false);
  }

  async createGenre(data: IGenre): Promise<void> {
    const emptyFields = await this.hasEmptyFields(data);
    if (emptyFields) throw new HttpError(400, 'The fields must be filled');

    const genre = await this.genreRepository.findOne(data.genre);
    if (genre) throw new HttpError(400, 'this genre already exists');

    await this.genreRepository.create(data);
  }

  async findGenre(genre: string): Promise<IGenre> {
    const _genre = await this.genreRepository.findOne(genre);
    return _genre;
  }

  async findAllGenres(): Promise<any> {
    const genres = await this.genreRepository.findAll();
    return genres;
  }

  async destroyGenre(id: string): Promise<void> {
    await this.genreRepository.destroy(id);
  }
}
