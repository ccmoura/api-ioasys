import { sign } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../../models/user/User';
import config from '../../../config/jwt.config';

class UserSessionRepository {
    async login(email, password) {
        const user = await User.query().findOne({ email });

        let passwordMatches = null;

        if (user) {
            passwordMatches = bcrypt.compareSync(password, user.password_hash);
        }

        if (!user || !passwordMatches) {
            return { error: 'Email or password does not match' };
        }

        const { id, name } = user;

        return {
            admin: {
                id,
                name,
                email,
            },
            token: sign(
                { id, email, isAdmin: false },
                config.secret || 'secret',
                {
                    expiresIn: config.expiresIn,
                }
            ),
        };
    }
}

export default new UserSessionRepository();
