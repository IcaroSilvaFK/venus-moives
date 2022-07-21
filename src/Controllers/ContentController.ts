import { Request, Response } from 'express';
import { IController } from 'src/Interfaces/ControllerInterface/IController';
import { IContent } from 'src/Interfaces/DataInterface/IContent';
import { Content } from 'src/Models/Content';
import { Season } from 'src/Models/Season';
import { ContentRepository } from 'src/Repositories/ContentRepository';
import { SeasonRepository } from 'src/Repositories/SeasonRepository';
import { ContentService } from 'src/Services/ContentService';

const seasonRepository = new SeasonRepository(Season);
const contentRepository = new ContentRepository(Content, seasonRepository);
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
}
