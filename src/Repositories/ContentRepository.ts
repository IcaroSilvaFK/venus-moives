import { generateKey } from 'crypto';
import { Model, Op, where } from 'sequelize';
import { IContent } from 'src/Interfaces/Data/IContent';
import { IModel } from 'src/Interfaces/Model/IModel';
import { IContentRepository } from 'src/Interfaces/Repository/IContentRepository';

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
      link: data.link,
      genre: data.genre
    });
  }

  async findOne(title: string): Promise<IContent | null> {
    const content = await this.contentModel.findOne({
      where: {
        title: title
      }
    });
    return content?.get() as IContent;
  }

  async findAllContents(): Promise<any> {
    const contents = await this.contentModel.findAll();
    return contents;
  }

  async findContentsByGenre(genre: string): Promise<any> {
    const contents = await this.contentModel.findAll({
      where: {
        genre: {
          [Op.substring]: genre
        } as any
      }
    });
    return contents;
  }

  async destroy(id: string) {
    await this.contentModel.destroy({
      where: {
        id: id
      }
    });
  }

  async update(data: IContent, id: string) {
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
          id: id
        }
      }
    );
  }
}
