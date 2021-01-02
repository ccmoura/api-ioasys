'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _yup = require('yup');

var _ErrorHandler = require('../../errors/ErrorHandler');

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (error, request, response, _next) {
    if (error instanceof _yup.ValidationError) {
        return response.status(400).json({ errors: error.errors.map(function (err) {
                return err;
            }) });
    }
    if (error instanceof _ErrorHandler2.default) {
        return response.status(error.statusCode).json({
            status: 'client error',
            error: error.message
        });
    }
    console.error(error);
    return response.status(500).json({ message: 'internal server error' });
};