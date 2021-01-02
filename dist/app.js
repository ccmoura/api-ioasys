'use strict';

require('express-async-errors');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

require('./database/connection');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _errorHandler = require('./app/middlewares/error-handler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _rateLimiter = require('./app/middlewares/rate-limiter');

var _rateLimiter2 = _interopRequireDefault(_rateLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use((0, _cors2.default)());
app.use((0, _helmet2.default)());

app.use(_express2.default.json());

app.use(_rateLimiter2.default);

app.use(_routes2.default);

app.use(_errorHandler2.default);

module.exports = app; // module.exports for run jest