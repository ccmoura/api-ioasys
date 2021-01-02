import bcrypt from 'bcrypt';

import User from '../../models/user/User';

class UserRepository {
    async store(user) {
        const userExists = await User.query().where({ email: user.email });

        if (userExists.length > 0) {
            return { error: 'E-mail already registered' };
        }

        user.password_hash = bcrypt.hashSync(user.password, 10);

        delete user.password;
        delete user.repeat_password;

        const newUser = await User.query().insert(user);

        return newUser;
    }

    async update(user, userId) {
        if (user.password) {
            user.password_hash = bcrypt.hashSync(user.password, 10);

            delete user.password;
            delete user.repeat_password;
        }

        const updated = await User.query().findById(userId).patch(user);

        delete updated.password_hash;

        return user;
    }

    async delete(userId) {
        const deleted = await User.query()
            .findById(userId)
            .patch({ deleted: true });

        return deleted;
    }
}

export default new UserRepository();
