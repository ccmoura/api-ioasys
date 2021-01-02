import { Router } from 'express';

import adminRoutes from './admin.routes';
import sessionRoutes from './session.routes';

const routes = Router();

routes.use('/', adminRoutes);
routes.use('/sessions', sessionRoutes);

export default routes;
