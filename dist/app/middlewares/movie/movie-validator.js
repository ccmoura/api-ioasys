'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _yup = require('yup');

var Yup = _interopRequireWildcard(_yup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = async function (req, res, next) {
    var schema = Yup.object().shape({
        description: Yup.string().max(255).required(),
        name: Yup.string().max(255).required(),
        gender: Yup.string().max(255).required(),
        actors: Yup.string().max(255).required(),
        director: Yup.string().max(255).required()
    });
    schema.validate(req.body).then(function (_) {
        return next();
    }).catch(function (err) {
        var error = err.errors;
        return res.status(400).json({ error: error });
    });
};