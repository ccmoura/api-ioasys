'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _admin = require('./admin');

var _admin2 = _interopRequireDefault(_admin);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _movie = require('./movie');

var _movie2 = _interopRequireDefault(_movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express.Router)();

routes.get('/', function (request, response) {
    response.status(200).json({ message: 'Hello!' });
});

routes.use('/admins', _admin2.default);
routes.use('/users', _user2.default);
routes.use('/movies', _movie2.default);

exports.default = routes;