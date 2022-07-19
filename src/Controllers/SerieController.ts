import { Request, Response } from 'express-serve-static-core';
import { IController } from 'src/Interfaces/ControllerInterface/IController';
import { SerieDTO } from 'src/Interfaces/DTOInterface/SerieDTO';
import { Serie } from 'src/Models/Serie';
import { SerieRepository } from 'src/Repositories/SerieRepository';
import { SerieService } from 'src/Services/SerieService';

const serireRepository = new SerieRepository(Serie);
const serieService = new SerieService(serireRepository);

export class SerieController implements IController {
  async store(req: Request, res: Response) {
    const data: SerieDTO = req.body;
    try {
      await serieService.create(data);
      return res.status(201).json({ status_code: 201, message: 'ok' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const series = await serieService.getAllSeries();
      return res.status(201).json({ status_code: 200, items: series });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }
}
