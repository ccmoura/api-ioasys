import { Router } from 'express';

import AdminSessionController from '../../app/controllers/admin/AdminSessionController';

import bruteForce from '../../app/middlewares/brute-force';

const routes = Router();

routes.use(bruteForce.prevent);
routes.post('/', AdminSessionController.store);

export default routes;
