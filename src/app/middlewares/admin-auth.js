export default (request, response, next) => {
    const { isAdmin } = request;

    if (!isAdmin) {
        return response
            .status(401)
            .json({ error: 'Only admins can access this feature' });
    }

    return next();
};
