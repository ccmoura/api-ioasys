'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _UserSessionController = require('../../app/controllers/user/UserSessionController');

var _UserSessionController2 = _interopRequireDefault(_UserSessionController);

var _bruteForce = require('../../app/middlewares/brute-force');

var _bruteForce2 = _interopRequireDefault(_bruteForce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express.Router)();
routes.use(_bruteForce2.default.prevent);
routes.post('/', _UserSessionController2.default.store);

exports.default = routes;