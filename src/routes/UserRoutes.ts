import { Router } from 'express';
import { UserController } from 'src/Controllers/UserController';

const router = Router();

const controller = new UserController();

router.post('/account');

export { router };
