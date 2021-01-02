'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AdminSessionRepository = require('../../repositories/admin/AdminSessionRepository');

var _AdminSessionRepository2 = _interopRequireDefault(_AdminSessionRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminSessionController = function () {
    function AdminSessionController() {
        _classCallCheck(this, AdminSessionController);
    }

    _createClass(AdminSessionController, [{
        key: 'store',
        value: async function store(request, response) {
            var _request$body = request.body,
                email = _request$body.email,
                password = _request$body.password;


            var auth = await _AdminSessionRepository2.default.login(email, password);

            return response.status(201).json(auth);
        }
    }]);

    return AdminSessionController;
}();

exports.default = new AdminSessionController();