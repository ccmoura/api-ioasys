'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _expressRateLimit = require('express-rate-limit');

var _expressRateLimit2 = _interopRequireDefault(_expressRateLimit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _expressRateLimit2.default)({
    windowMs: 10 * 60 * 1000,
    max: 100
});