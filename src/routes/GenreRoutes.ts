import { Router } from 'express';
import { AuthMiddleware } from '@middlewares/AuthMiddleware';
import { GenreController } from '@controllers/GenreController';

const router = Router();

const controller = new GenreController();
const middleware = new AuthMiddleware();

router.post('/genre', middleware.tokeVerify, controller.store);
router.get('/genres', middleware.tokeVerify, controller.index);

export { router };
