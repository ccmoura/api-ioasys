import * as Yup from 'yup';

export default async (req, res, next) => {
    const schema = Yup.object().shape({
        description: Yup.string().max(255).required(),
        name: Yup.string().max(255).required(),
        gender: Yup.string().max(255).required(),
        actors: Yup.string().max(255).required(),
        director: Yup.string().max(255).required(),
    });
    schema
        .validate(req.body)
        .then((_) => next())
        .catch((err) => {
            const error = err.errors;
            return res.status(400).json({ error });
        });
};
