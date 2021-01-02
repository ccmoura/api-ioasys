import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import config from '../../config/jwt.config';

export default async (request, response, next) => {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.status(401).json({ error: 'Token not provided' });
    }
    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, config.secret);
        request.userId = decoded.id;
        request.email = decoded.email;
        request.isAdmin = decoded.isAdmin;

        return next();
    } catch (err) {
        return response.status(401).json({ error: 'Token invalid' });
    }
};
