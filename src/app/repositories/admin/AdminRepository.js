import bcrypt from 'bcrypt';

import Admin from '../../models/admin/Admin';
import ErrorHandler from '../../../errors/ErrorHandler';

class AdminRepository {
    async store(admin) {
        const adminExists = await Admin.query().where({ email: admin.email });

        if (adminExists.length > 0) {
            throw new ErrorHandler('E-mail already registered');
        }

        admin.password_hash = bcrypt.hashSync(admin.password, 10);

        delete admin.password;
        delete admin.repeat_password;

        const newAdmin = await Admin.query().insert(admin);

        return newAdmin;
    }

    async update(admin, adminId) {
        if (admin.password) {
            admin.password_hash = bcrypt.hashSync(admin.password, 10);

            delete admin.password;
            delete admin.repeat_password;
        }

        const updated = await Admin.query().findById(adminId).patch(admin);

        delete updated.password_hash;

        return admin;
    }

    async delete(adminId) {
        const deleted = await Admin.query()
            .findById(adminId)
            .patch({ deleted: true });

        return deleted;
    }
}

export default new AdminRepository();
