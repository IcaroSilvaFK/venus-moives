import { Router } from 'express';
import { MovieController } from 'src/Controllers/MovieController';

const router = Router();

const controller = new MovieController();

router.post('/movies/save', controller.store);
router.get('/movies/', controller.index);
router.get('/movies/:title', controller.show);

export { router };
