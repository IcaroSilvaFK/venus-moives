import { Request, Response } from 'express';
import { IController } from 'src/Interfaces/ControllerInterface/IController';
import { IContent } from 'src/Interfaces/DataInterface/IContent';
import { Content } from 'src/Models/Content';
import { ContentRepository } from 'src/Repositories/ContentRepository';
import { ContentService } from 'src/Services/ContentService';

const contentRepository = new ContentRepository(Content);
const contentService = new ContentService(contentRepository);

export class ContentController implements IController {
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
      const content = await contentService.getContentByTitle(title);
      return res.status(200).json({ status_code: 200, content });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const contents = await contentService.getAllContents();
      return res.status(200).json({ status_code: 200, contents });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async indexGenres(req: Request, res: Response) {
    const { genre } = req.params;
    try {
      const contents = await contentService.getContentsByGenre(genre);
      return res.status(200).json({ status_code: 200, contents });
    } catch (error) {
      console.error(error);
      return res.status(200).json({ error });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await contentService.deleteContent(id);
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
