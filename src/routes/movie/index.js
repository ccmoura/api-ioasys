import { Router } from 'express';

import movieRoutes from './movie.routes';
import voteRoutes from './vote.routes';

const routes = Router();

routes.use('/', movieRoutes);
routes.use('/votes', voteRoutes);

export default routes;
