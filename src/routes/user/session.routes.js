import { Router } from 'express';

import UserSessionController from '../../app/controllers/user/UserSessionController';

import bruteForce from '../../app/middlewares/brute-force';

const routes = Router();
routes.use(bruteForce.prevent);
routes.post('/', UserSessionController.store);

export default routes;
