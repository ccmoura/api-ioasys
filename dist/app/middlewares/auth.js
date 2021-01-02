'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _util = require('util');

var _jwt = require('../../config/jwt.config');

var _jwt2 = _interopRequireDefault(_jwt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async function (request, response, next) {
    var authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.status(401).json({ error: 'Token not provided' });
    }

    var _authHeader$split = authHeader.split(' '),
        _authHeader$split2 = _slicedToArray(_authHeader$split, 2),
        token = _authHeader$split2[1];

    try {
        var decoded = await (0, _util.promisify)(_jsonwebtoken2.default.verify)(token, _jwt2.default.secret);
        request.userId = decoded.id;
        request.email = decoded.email;
        request.isAdmin = decoded.isAdmin;

        return next();
    } catch (err) {
        return response.status(401).json({ error: 'Token invalid' });
    }
};