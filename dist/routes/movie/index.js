'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _movie = require('./movie.routes');

var _movie2 = _interopRequireDefault(_movie);

var _vote = require('./vote.routes');

var _vote2 = _interopRequireDefault(_vote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express.Router)();

routes.use('/', _movie2.default);
routes.use('/votes', _vote2.default);

exports.default = routes;