import { Router } from 'express';
import { ContentController } from 'src/Controllers/ContentController';

const router = Router();

const controller = new ContentController();

router.post('/content/create', controller.store);

export { router };
