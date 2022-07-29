import { Router } from 'express';
import { GenreController } from 'src/Controllers/GenreController';

const router = Router();

const controller = new GenreController();

router.post('/genre', controller.store);
router.get('/genre/:genre', controller.show);
router.get('/genres', controller.index);

export { router };
