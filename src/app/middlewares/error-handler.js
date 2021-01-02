import { ValidationError } from 'yup';
import ErrorHandler from '../../errors/ErrorHandler';

export default (error, request, response, _next) => {
    if (error instanceof ValidationError) {
        return response
            .status(400)
            .json({ errors: error.errors.map((err) => err) });
    }
    if (error instanceof ErrorHandler) {
        return response.status(error.statusCode).json({
            status: 'client error',
            error: error.message,
        });
    }
    console.error(error);
    return response.status(500).json({ message: 'internal server error' });
};
