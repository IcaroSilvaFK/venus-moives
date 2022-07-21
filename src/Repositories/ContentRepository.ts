import { Op } from 'sequelize';
import { IContent } from 'src/Interfaces/DataInterface/IContent';
import { ISeason } from 'src/Interfaces/DataInterface/ISeason';
import { IModel } from 'src/Interfaces/ModelsInterface/IModel';
import { IContentRepository } from 'src/Interfaces/RepositoryInterface/IContentRepository';
import { SeasonRepository } from './SeasonRepository';

export class ContentRepository implements IContentRepository {
  constructor(
    private contentModel: IModel<IContent>,
    private seasonRepository: SeasonRepository
  ) {}

  async create(data: IContent): Promise<void> {
    const contentData = await this.contentModel.create({
      title: data.title,
      released: data.released,
      runtime: data.runtime,
      director: data.director,
      plot: data.plot,
      language: data.language,
      poster: data.poster,
      country: data.country,
      genre: data.genre,
      category: data.category
    });

    const result = contentData.get();

    const { season } = data;

    const seasonObject = {
      season: season,
      fk_content_id: result.content_id
    } as ISeason;

    await this.seasonRepository.create(seasonObject);
  }

  async geyMoviesByGenre(genre: string): Promise<void> {
    await this.contentModel.findAll({
      where: {
        genre: { [Op.like]: genre }
      }
    });
  }
}
