import { IContent } from '../DataInterface/IContent';

export interface IContentRepository {
  create: (data: IContent) => Promise<void>;
}
