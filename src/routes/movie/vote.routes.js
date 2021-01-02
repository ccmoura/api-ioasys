import { Router } from 'express';

import VoteController from '../../app/controllers/movie/VoteController';
import VoteValidatorMiddleware from '../../app/middlewares/movie/vote-validator';
import AuthMiddleware from '../../app/middlewares/auth';

const routes = Router();

routes.post('/', AuthMiddleware, VoteValidatorMiddleware, VoteController.store);

export default routes;
