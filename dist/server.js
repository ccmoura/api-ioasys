"use strict";

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
var port = process.env.PORT;

_app2.default.listen(port, function () {
    console.log("API is running on port " + port);
});