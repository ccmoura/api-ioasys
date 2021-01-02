import { Router } from 'express';

import UserController from '../../app/controllers/user/UserController';
import UserValidatorMiddleware from '../../app/middlewares/user/user-validator';
import UserUpdateValidatorMiddleware from '../../app/middlewares/user/user-update-validator';
import AuthMiddleware from '../../app/middlewares/auth';

const routes = Router();

routes.post('/', UserValidatorMiddleware, UserController.store);
routes.patch(
    '/',
    AuthMiddleware,
    UserUpdateValidatorMiddleware,
    UserController.update
);
routes.delete('/', AuthMiddleware, UserController.delete);

export default routes;
