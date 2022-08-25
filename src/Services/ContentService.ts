import { HttpError } from '../errors/HttpError';
import { IContent } from '../Interfaces/Data/IContent';
import { ContentRepository } from '../Repositories/ContentRepository';
import { Content } from '@prisma/client';

interface IContentProps extends Content {
  genres: string[];
}

export class ContentService {
  constructor(private contentRepository: ContentRepository) {}

  async hasEmptyFields(data: IContentProps) {
    return Object.values(data)
      .map((values) => !!values)
      .includes(false);
  }

  async createContent(data: IContentProps): Promise<void> {
    const emptyFields = await this.hasEmptyFields(data);
    if (emptyFields) throw new HttpError(400, 'The fields must be filled');

    const { genres, ...rest } = data;

    await this.contentRepository.create({
      ...rest,
      genres
    });
  }

  async findContentByTitle(title: string) {
    const content = await this.contentRepository.findOne(title);
    if (!content) throw new HttpError(404, 'content not available');
    return content;
  }

  async findAllContents(): Promise<IContent[]> {
    const contents = await this.contentRepository.findAllContents();
    return contents;
  }

  async findContentsByGenre(genre: string): Promise<IContent[]> {
    const _genre = genre
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    console.log(_genre);

    const contents = await this.contentRepository.findContentsByGenre(_genre);
    if (!contents) throw new HttpError(404, 'content not available');

    return contents;
  }

  async destroyContent(id: string): Promise<void> {
    await this.contentRepository.destroy(id);
  }

  async updateContent(data: IContentProps, id: string): Promise<void> {
    const emptyFields = await this.hasEmptyFields(data);
    if (emptyFields) throw new HttpError(400, 'The fields must be filled');

    await this.contentRepository.update(data, id);
  }
}
