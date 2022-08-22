import { UserController } from '@controllers/UserController';
import { Router } from 'express';

const router = Router();

const controller = new UserController();

router.post('/account', controller.store);
router.post('/login', controller.login);
export { router };
