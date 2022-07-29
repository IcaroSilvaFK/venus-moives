import { IContent } from '../Data/IContent';

export interface IContentRepository {
  create: (data: IContent) => Promise<void>;
  getContentByTitle: (title: string) => Promise<IContent | null>;
  getAllContents: () => Promise<IContent[]>;
  getContentsByGenre: (genre: string) => Promise<IContent[]>;
  deleteContent: (id: string) => Promise<void>;
  updateContent: (data: IContent, id: string) => Promise<void>;
}
