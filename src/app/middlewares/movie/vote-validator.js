import * as Yup from 'yup';

export default async (req, res, next) => {
    const schema = Yup.object().shape({
        vote: Yup.number().min(0).max(4).required(),
        movie_id: Yup.string().max(255).required(),
    });
    schema
        .validate(req.body)
        .then((_) => next())
        .catch((err) => {
            const error = err.errors;
            return res.status(400).json({ error });
        });
};
