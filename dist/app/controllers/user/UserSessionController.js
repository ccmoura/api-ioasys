'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UserSessionRepository = require('../../repositories/user/UserSessionRepository');

var _UserSessionRepository2 = _interopRequireDefault(_UserSessionRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserSessionController = function () {
    function UserSessionController() {
        _classCallCheck(this, UserSessionController);
    }

    _createClass(UserSessionController, [{
        key: 'store',
        value: async function store(request, response) {
            var _request$body = request.body,
                email = _request$body.email,
                password = _request$body.password;


            var auth = await _UserSessionRepository2.default.login(email, password);

            return response.status(201).json(auth);
        }
    }]);

    return UserSessionController;
}();

exports.default = new UserSessionController();