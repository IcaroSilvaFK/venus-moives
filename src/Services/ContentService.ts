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

    await this.contentRepository.create(data);
  }
}
