import { Router } from 'express';
import { UserController } from '../Controllers/UserController';

const router = Router();

const controller = new UserController();

router.post('/account', controller.store);
router.post('/login', controller.login);
export { router };
