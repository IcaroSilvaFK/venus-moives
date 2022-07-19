import { Request, Response } from 'express-serve-static-core';
import { IController } from 'src/Interfaces/ControllerInterface/IController';
import { MovieDTO } from 'src/Interfaces/DTOInterface/MovieDTO';
import { Movie } from 'src/Models/Movie';
import { MovieRepository } from 'src/Repositories/MovieRepository';
import { MovieService } from 'src/Services/MovieService';

const movieRepository = new MovieRepository(Movie);
const movieService = new MovieService(movieRepository);

export class MovieController implements IController {
  async store(req: Request, res: Response) {
    const data: MovieDTO = req.body;

    try {
      await movieService.create(data);
      return res.status(201).json({ status_code: 201, message: 'ok' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const movies = await movieService.getAllMovies();
      return res.status(200).json({ status_code: 200, items: movies });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }

  async show(req: Request, res: Response) {
    const { title } = req.params;
    try {
      const movies = await movieService.getMoviesByTitle(title);
      return res.status(200).json({ status_code: 200, items: movies });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }
}
