import { HttpError } from 'src/Exeptions/HttpError';
import { IContent } from 'src/Interfaces/DataInterface/IContent';
import { IContentRepository } from 'src/Interfaces/RepositoryInterface/IContentRepository';
import { IContentService } from 'src/Interfaces/ServiceInterface/IContentService';

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

    const contentExists = await this.contentRepository.getContentByTitle(
      data.title
    );
    if (contentExists)
      throw new HttpError(400, 'This movie is already registered');

    await this.contentRepository.create(data);
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
    const contents = await this.contentRepository.getContentsByGenre(genre);
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
