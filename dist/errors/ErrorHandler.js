"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorHandler = function ErrorHandler(message) {
    var statusCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;

    _classCallCheck(this, ErrorHandler);

    this.message = message;
    this.statusCode = statusCode;
};

exports.default = ErrorHandler;