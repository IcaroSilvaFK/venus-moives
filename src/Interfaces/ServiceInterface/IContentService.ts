import { IContent } from '../DataInterface/IContent';

export interface IContentService {
  createContent: (data: IContent) => Promise<void>;
}
