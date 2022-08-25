import { Router } from 'express';
import { AuthMiddleware } from '../Middlewares/AuthMiddleware';
import { ContentController } from '../Controllers/ContentController';

const router = Router();

const controller = new ContentController();
const middleware = new AuthMiddleware();

router.post('/movie/create', middleware.tokeVerify, controller.store);
router.get('/movie/:title', middleware.tokeVerify, controller.show);
router.get('/movies', middleware.tokeVerify, controller.index);
router.get(
  '/movies/genre/:genre',
  middleware.tokeVerify,
  controller.indexGenres
);
router.delete('/movie/delete/:id', middleware.tokeVerify, controller.delete);
router.put('/movie/update/:id', middleware.tokeVerify, controller.update);

export { router };
