'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _expressBrute = require('express-brute');

var _expressBrute2 = _interopRequireDefault(_expressBrute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = new _expressBrute2.default.MemoryStore();

exports.default = new _expressBrute2.default(store, {
    freeRetries: 6,
    minWait: 4 * 60 * 1000, // 4 min
    maxWait: 60 * 60 * 1000 // 1 hour
});