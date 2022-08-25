import { IContent } from '../Data/IContent';

export interface IContentService {
  createContent: (data: IContent) => Promise<void>;
  findContentByTitle: (title: string) => Promise<IContent | null>;
  findAllContents: () => Promise<IContent[]>;
  findContentsByGenre: (genre: string) => Promise<IContent[]>;
  destroyContent: (id: string) => Promise<void>;
  updateContent: (data: IContent, id: string) => Promise<void>;
}
