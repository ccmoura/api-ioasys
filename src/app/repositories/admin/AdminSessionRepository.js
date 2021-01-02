import { sign } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Admin from '../../models/admin/Admin';
import config from '../../../config/jwt.config';

class AdminSessionRepository {
    async login(email, password) {
        const admin = await Admin.query().findOne({ email });

        let passwordMatches = null;

        if (admin) {
            passwordMatches = bcrypt.compareSync(password, admin.password_hash);
        }

        if (!admin || !passwordMatches) {
            return { error: 'Email or password does not match' };
        }

        const { id, name } = admin;

        return {
            admin: {
                id,
                name,
                email,
            },
            token: sign(
                { id, email, isAdmin: true },
                config.secret || 'secret',
                {
                    expiresIn: config.expiresIn,
                }
            ),
        };
    }
}

export default new AdminSessionRepository();
