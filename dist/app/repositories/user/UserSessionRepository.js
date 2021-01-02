'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _User = require('../../models/user/User');

var _User2 = _interopRequireDefault(_User);

var _jwt = require('../../../config/jwt.config');

var _jwt2 = _interopRequireDefault(_jwt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserSessionRepository = function () {
    function UserSessionRepository() {
        _classCallCheck(this, UserSessionRepository);
    }

    _createClass(UserSessionRepository, [{
        key: 'login',
        value: async function login(email, password) {
            var user = await _User2.default.query().findOne({ email: email });

            var passwordMatches = null;

            if (user) {
                passwordMatches = _bcrypt2.default.compareSync(password, user.password_hash);
            }

            if (!user || !passwordMatches) {
                return { error: 'Email or password does not match' };
            }

            var id = user.id,
                name = user.name;


            return {
                admin: {
                    id: id,
                    name: name,
                    email: email
                },
                token: (0, _jsonwebtoken.sign)({ id: id, email: email, isAdmin: false }, _jwt2.default.secret || 'secret', {
                    expiresIn: _jwt2.default.expiresIn
                })
            };
        }
    }]);

    return UserSessionRepository;
}();

exports.default = new UserSessionRepository();