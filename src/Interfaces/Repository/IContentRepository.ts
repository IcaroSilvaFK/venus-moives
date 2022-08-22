import { IContent } from '@interfaces/data/IContent';

export interface IContentRepository {
  create: (data: IContent) => Promise<void>;
  findOne: (title: string) => Promise<IContent | null>;
  findAllContents: () => Promise<IContent[]>;
  findContentsByGenre: (genre: string) => Promise<IContent[]>;
  destroy: (id: string) => Promise<void>;
  update: (data: IContent, id: string) => Promise<void>;
}
