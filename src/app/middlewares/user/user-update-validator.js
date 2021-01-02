import * as Yup from 'yup';

export default async (req, res, next) => {
    const schema = Yup.object().shape({
        email: Yup.string().max(255),
        name: Yup.string().max(255),
        password: Yup.string().min(8),
        repeat_password: Yup.string().when('password', {
            is: (password) => password && password.length > 0,
            then: Yup.string()
                .required('repeat_password field is required')
                .typeError('repeat_password field is required'),
        }),
    });
    schema
        .validate(req.body)
        .then((_) => next())
        .catch((err) => {
            const error = err.errors;
            return res.status(400).json({ error });
        });
};
