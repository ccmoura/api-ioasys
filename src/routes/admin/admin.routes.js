import { Router } from 'express';

import AdminController from '../../app/controllers/admin/AdminController';
import AdminValidatorMiddleware from '../../app/middlewares/admin/admin-validator';
import AdminUpdateValidatorMiddleware from '../../app/middlewares/admin/admin-update-validator';
import AuthMiddleware from '../../app/middlewares/auth';
import AuthAdminMiddleware from '../../app/middlewares/admin-auth';

const routes = Router();

routes.post('/', AdminValidatorMiddleware, AdminController.store);
routes.patch(
    '/',
    AuthMiddleware,
    AuthAdminMiddleware,
    AdminUpdateValidatorMiddleware,
    AdminController.update
);
routes.delete(
    '/',
    AuthMiddleware,
    AuthAdminMiddleware,
    AdminUpdateValidatorMiddleware,
    AdminController.delete
);

export default routes;
