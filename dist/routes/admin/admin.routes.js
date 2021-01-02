'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _AdminController = require('../../app/controllers/admin/AdminController');

var _AdminController2 = _interopRequireDefault(_AdminController);

var _adminValidator = require('../../app/middlewares/admin/admin-validator');

var _adminValidator2 = _interopRequireDefault(_adminValidator);

var _adminUpdateValidator = require('../../app/middlewares/admin/admin-update-validator');

var _adminUpdateValidator2 = _interopRequireDefault(_adminUpdateValidator);

var _auth = require('../../app/middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

var _adminAuth = require('../../app/middlewares/admin-auth');

var _adminAuth2 = _interopRequireDefault(_adminAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express.Router)();

routes.post('/', _adminValidator2.default, _AdminController2.default.store);
routes.patch('/', _auth2.default, _adminAuth2.default, _adminUpdateValidator2.default, _AdminController2.default.update);
routes.delete('/', _auth2.default, _adminAuth2.default, _adminUpdateValidator2.default, _AdminController2.default.delete);

exports.default = routes;