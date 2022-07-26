import { Router } from 'express';
import { ContentController } from 'src/Controllers/ContentController';

const router = Router();

const controller = new ContentController();

router.post('/movie/create', controller.store);
router.get('/movie/:title', controller.show);
router.get('/movies', controller.index);
router.get('/movies/genre/:genre', controller.indexGenres);
router.delete('/movie/delete/:id', controller.delete);
router.put('/movie/update/:id', controller.update);
export { router };
