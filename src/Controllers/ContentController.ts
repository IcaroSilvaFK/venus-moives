import { Content } from '@prisma/client';
import { Request, Response } from 'express';
import { ContentRepository } from '../Repositories/ContentRepository';
import { ContentService } from '../Services/ContentService';

interface IContentProps extends Content {
  genres: string[];
}

const contentRepository = new ContentRepository();
const contentService = new ContentService(contentRepository);

export class ContentController {
  async store(req: Request, res: Response) {
    const data: IContentProps = req.body;
    try {
      await contentService.createContent(data);
      return res.status(201).json({ status_code: 201, message: 'saved' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async show(req: Request, res: Response) {
    const { title } = req.params;
    try {
      const content = await contentService.findContentByTitle(title);
      return res.status(200).json(content);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const contents = await contentService.findAllContents();
      return res.status(200).json(contents);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async indexGenres(req: Request, res: Response) {
    const { genre } = req.params;
    try {
      const contents = await contentService.findContentsByGenre(genre);
      return res.status(200).json(contents);
    } catch (error) {
      console.error(error);
      return res.status(200).json({ error });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await contentService.destroyContent(id);
      return res
        .status(200)
        .json({ status_code: 200, message: 'content deleted' });
    } catch (error) {
      console.error(error);
      return res.status(200).json({ error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: IContentProps = req.body;
      await contentService.updateContent(data, id);
      return res
        .status(200)
        .json({ status_code: 200, message: 'content updated' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }
}
