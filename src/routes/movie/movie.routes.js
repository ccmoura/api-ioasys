import { Router } from 'express';

import MovieController from '../../app/controllers/movie/MovieController';
import MovieValidatorMiddleware from '../../app/middlewares/movie/movie-validator';
import AuthMiddleware from '../../app/middlewares/auth';
import AuthAdminMiddleware from '../../app/middlewares/admin-auth';

const routes = Router();

routes.get('/', MovieController.index);
routes.post(
    '/',
    AuthMiddleware,
    AuthAdminMiddleware,
    MovieValidatorMiddleware,
    MovieController.store
);

export default routes;
