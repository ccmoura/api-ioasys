'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _AdminSessionController = require('../../app/controllers/admin/AdminSessionController');

var _AdminSessionController2 = _interopRequireDefault(_AdminSessionController);

var _bruteForce = require('../../app/middlewares/brute-force');

var _bruteForce2 = _interopRequireDefault(_bruteForce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express.Router)();

routes.use(_bruteForce2.default.prevent);
routes.post('/', _AdminSessionController2.default.store);

exports.default = routes;