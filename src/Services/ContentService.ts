import { HttpError } from 'src/Exeptions/HttpError';
import { IContent } from 'src/Interfaces/Data/IContent';
import { IContentRepository } from 'src/Interfaces/Repository/IContentRepository';
import { IContentService } from 'src/Interfaces/Service/IContentService';

export class ContentService implements IContentService {
  constructor(private contentRepository: IContentRepository) {}

  async hasEmptyFields(data: IContent) {
    return Object.values(data)
      .map((values) => !!values)
      .includes(false);
  }

  async createContent(data: IContent): Promise<void> {
    const emptyFields = await this.hasEmptyFields(data);
    if (emptyFields) throw new HttpError(400, 'The fields must be filled');

    const { genre } = data;
    const genre_parsed = genre.map((values) =>
      values
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
    );

    const _data = {
      title: data.title,
      released: data.released,
      runtime: data.runtime,
      director: data.director,
      plot: data.plot,
      language: data.language,
      poster: data.poster,
      country: data.country,
      genre: genre_parsed
    };
    await this.contentRepository.create(_data);
  }

  async getContentByTitle(title: string): Promise<IContent | null> {
    const content = await this.contentRepository.getContentByTitle(title);
    if (!content) throw new HttpError(404, 'content not available');
    return content;
  }

  async getAllContents(): Promise<IContent[]> {
    const contents = await this.contentRepository.getAllContents();
    return contents;
  }

  async getContentsByGenre(genre: string): Promise<IContent[]> {
    const _genre = genre
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    console.log(_genre);

    const contents = await this.contentRepository.getContentsByGenre(_genre);
    if (!contents) throw new HttpError(404, 'content not available');

    return contents;
  }

  async deleteContent(id: string): Promise<void> {
    await this.contentRepository.deleteContent(id);
  }

  async updateContent(data: IContent, id: string): Promise<void> {
    const emptyFields = await this.hasEmptyFields(data);
    if (emptyFields) throw new HttpError(400, 'The fields must be filled');
    await this.contentRepository.updateContent(data, id);
  }
}
