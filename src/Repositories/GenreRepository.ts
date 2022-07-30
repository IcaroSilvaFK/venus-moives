import { IGenre } from 'src/Interfaces/Data/IGenre';
import { IModel } from 'src/Interfaces/Model/IModel';

export class GenreRepository {
  constructor(private genreModel: IModel<IGenre>) {}

  async create(data: IGenre): Promise<void> {
    await this.genreModel.create({
      genre: data.genre
    });
  }

  async findOne(genre: string): Promise<IGenre> {
    const _genre = await this.genreModel.findOne({
      where: {
        genre: genre
      }
    });
    return _genre?.get() as IGenre;
  }

  async findAll(): Promise<any> {
    const genres = await this.genreModel.findAll();
    return genres;
  }

  async destroy(id: string): Promise<void> {
    await this.genreModel.destroy({
      where: {
        id: id
      }
    });
  }
}
