'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _UserController = require('../../app/controllers/user/UserController');

var _UserController2 = _interopRequireDefault(_UserController);

var _userValidator = require('../../app/middlewares/user/user-validator');

var _userValidator2 = _interopRequireDefault(_userValidator);

var _userUpdateValidator = require('../../app/middlewares/user/user-update-validator');

var _userUpdateValidator2 = _interopRequireDefault(_userUpdateValidator);

var _auth = require('../../app/middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express.Router)();

routes.post('/', _userValidator2.default, _UserController2.default.store);
routes.patch('/', _auth2.default, _userUpdateValidator2.default, _UserController2.default.update);
routes.delete('/', _auth2.default, _UserController2.default.delete);

exports.default = routes;