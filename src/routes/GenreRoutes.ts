import { Router } from 'express';
import { AuthMiddleware } from '../Middlewares/AuthMiddleware';
import { GenreController } from '../Controllers/GenreController';

const router = Router();

const controller = new GenreController();
const middleware = new AuthMiddleware();

router.post('/genre', middleware.tokeVerify, controller.store);
router.get('/genres', middleware.tokeVerify, controller.index);

export { router };
