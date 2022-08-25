import { Response } from 'express';
import { Request } from 'express-serve-static-core';
import { Genres } from '@prisma/client';
import { GenreRepository } from '../Repositories/GenreRepository';
import { GenreService } from '../Services/GenreService';

const genreRepository = new GenreRepository();
const genreService = new GenreService(genreRepository);

export class GenreController {
  async store(req: Request, res: Response) {
    const data: Genres = req.body;
    try {
      await genreService.createGenre(data);
      return res.status(201).json({ message: 'ok' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const genres = await genreService.findAllGenres();
      return res.status(200).json(genres);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await genreService.destroyGenre(id);
      return res.status(200).json({ message: 'deleted' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }
}
