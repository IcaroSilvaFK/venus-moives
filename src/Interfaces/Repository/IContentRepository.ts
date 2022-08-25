import { Content } from '@prisma/client';
export interface IContentRepository {
  create: (data: Content) => Promise<void>;
  findOne: (title: string) => Promise<Content | null>;
  findAllContents: () => Promise<Content[]>;
  findContentsByGenre: (genre: string) => Promise<Content[]>;
  destroy: (id: string) => Promise<void>;
  update: (data: Content, id: string) => Promise<void>;
}
