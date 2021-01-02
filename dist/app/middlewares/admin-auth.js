'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (request, response, next) {
    var isAdmin = request.isAdmin;


    if (!isAdmin) {
        return response.status(401).json({ error: 'Only admins can access this feature' });
    }

    return next();
};