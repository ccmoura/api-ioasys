'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _MovieController = require('../../app/controllers/movie/MovieController');

var _MovieController2 = _interopRequireDefault(_MovieController);

var _movieValidator = require('../../app/middlewares/movie/movie-validator');

var _movieValidator2 = _interopRequireDefault(_movieValidator);

var _auth = require('../../app/middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

var _adminAuth = require('../../app/middlewares/admin-auth');

var _adminAuth2 = _interopRequireDefault(_adminAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express.Router)();

routes.get('/', _MovieController2.default.index);
routes.post('/', _auth2.default, _adminAuth2.default, _movieValidator2.default, _MovieController2.default.store);

exports.default = routes;