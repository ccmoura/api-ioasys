'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _admin = require('./admin.routes');

var _admin2 = _interopRequireDefault(_admin);

var _session = require('./session.routes');

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express.Router)();

routes.use('/', _admin2.default);
routes.use('/sessions', _session2.default);

exports.default = routes;