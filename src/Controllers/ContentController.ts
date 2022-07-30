import { Request, Response } from 'express';
import { Controller } from 'src/Controllers/Controller';
import { IContent } from 'src/Interfaces/Data/IContent';
import { Content } from 'src/Models/Content';
import { ContentRepository } from 'src/Repositories/ContentRepository';
import { ContentService } from 'src/Services/ContentService';

const contentRepository = new ContentRepository(Content);
const contentService = new ContentService(contentRepository);

export class ContentController implements Controller {
  async store(req: Request, res: Response) {
    const data: IContent = req.body;
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
      const item = await contentService.findContentByTitle(title);
      return res.status(200).json(item);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const items = await contentService.findAllContents();
      return res.status(200).json(items);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async indexGenres(req: Request, res: Response) {
    const { genre } = req.params;
    try {
      const items = await contentService.findContentsByGenre(genre);
      return res.status(200).json(items);
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
      const data: IContent = req.body;
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
