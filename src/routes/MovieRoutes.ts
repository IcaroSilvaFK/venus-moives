import { Router } from 'express';
import { MovieController } from 'src/Controllers/MovieController';

const router = Router();

const controller = new MovieController();

router.post('/movies/save', controller.store);

export { router };
