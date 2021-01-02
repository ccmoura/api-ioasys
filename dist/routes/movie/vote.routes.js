'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _VoteController = require('../../app/controllers/movie/VoteController');

var _VoteController2 = _interopRequireDefault(_VoteController);

var _voteValidator = require('../../app/middlewares/movie/vote-validator');

var _voteValidator2 = _interopRequireDefault(_voteValidator);

var _auth = require('../../app/middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express.Router)();

routes.post('/', _auth2.default, _voteValidator2.default, _VoteController2.default.store);

exports.default = routes;