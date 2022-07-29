import { IGenre } from 'src/Interfaces/Data/IGenre';
import { IGenreRepository } from 'src/Interfaces/Repository/IGenreRepository';
import { IGenreService } from 'src/Interfaces/Service/IGenreService';
import { HttpError } from 'src/Exeptions/HttpError';

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

    const genre = await this.getGenreByName(data.genre);
    if (genre) throw new HttpError(400, 'this genre already exists');

    await this.genreRepository.create(data);
  }

  async getGenreByName(genre: string): Promise<IGenre> {
    const _genre = await this.genreRepository.getGenreByName(genre);
    return _genre;
  }

  async getAllGenres(): Promise<any> {
    const genres = await this.genreRepository.getAllGenres();
    return genres;
  }

  async deleteGenre(id: string): Promise<void> {
    await this.genreRepository.deleteGenre(id);
  }
}
