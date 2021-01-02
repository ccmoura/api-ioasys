import { Router } from 'express';

import adminRoutes from './admin';
import userRoutes from './user';
import movieRoutes from './movie';

const routes = Router();

routes.get('/', (request, response) => {
    response.status(200).json({ message: 'Hello!' });
});

routes.use('/admins', adminRoutes);
routes.use('/users', userRoutes);
routes.use('/movies', movieRoutes);

export default routes;
