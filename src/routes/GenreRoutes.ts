import { Router } from 'express';
import { GenreController } from 'src/Controllers/GenreController';
import { AuthMiddleware } from 'src/Middlewares/AuthMiddleware';

const router = Router();

const controller = new GenreController();
const middleware = new AuthMiddleware();

router.post('/genre', middleware.tokeVerify, controller.store);
router.get('/genres', middleware.tokeVerify, controller.index);

export { router };
