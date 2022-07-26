import { Model, Op, where } from 'sequelize';
import { IContent } from 'src/Interfaces/DataInterface/IContent';
import { IModel } from 'src/Interfaces/ModelsInterface/IModel';
import { IContentRepository } from 'src/Interfaces/RepositoryInterface/IContentRepository';

export class ContentRepository implements IContentRepository {
  constructor(private contentModel: IModel<IContent>) {}

  async create(data: IContent): Promise<void> {
    await this.contentModel.create({
      title: data.title,
      released: data.released,
      runtime: data.runtime,
      director: data.director,
      plot: data.plot,
      language: data.language,
      poster: data.poster,
      country: data.country,
      genre: data.genre
    });
  }

  async getContentByTitle(title: string): Promise<IContent | null> {
    const content = await this.contentModel.findOne({
      where: {
        title: title
      }
    });
    return content?.get() as IContent;
  }

  async getAllContents(): Promise<any> {
    const contents = await this.contentModel.findAll();
    return contents;
  }

  async getContentsByGenre(genre: string): Promise<any> {
    const contents = await this.contentModel.findAll({
      where: {
        genre: {
          [Op.substring]: genre
        }
      }
    });
    return contents;
  }

  async deleteContent(id: string) {
    await this.contentModel.destroy({
      where: {
        content_id: id
      }
    });
  }

  async updateContent(data: IContent, id: string) {
    await this.contentModel.update(
      {
        title: data.title,
        released: data.released,
        runtime: data.runtime,
        director: data.director,
        plot: data.plot,
        language: data.language,
        poster: data.poster,
        country: data.country,
        genre: data.genre
      },
      {
        where: {
          content_id: id
        }
      }
    );
  }
}
