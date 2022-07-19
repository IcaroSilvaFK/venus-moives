import { Router } from 'express';
import { SerieController } from 'src/Controllers/SerieController';

const router = Router();

const controller = new SerieController();

router.post('/series/save', controller.store);
router.get('/series', controller.index);

export { router };
