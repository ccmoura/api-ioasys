'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _Admin = require('../../models/admin/Admin');

var _Admin2 = _interopRequireDefault(_Admin);

var _jwt = require('../../../config/jwt.config');

var _jwt2 = _interopRequireDefault(_jwt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminSessionRepository = function () {
    function AdminSessionRepository() {
        _classCallCheck(this, AdminSessionRepository);
    }

    _createClass(AdminSessionRepository, [{
        key: 'login',
        value: async function login(email, password) {
            var admin = await _Admin2.default.query().findOne({ email: email });

            var passwordMatches = null;

            if (admin) {
                passwordMatches = _bcrypt2.default.compareSync(password, admin.password_hash);
            }

            if (!admin || !passwordMatches) {
                return { error: 'Email or password does not match' };
            }

            var id = admin.id,
                name = admin.name;


            return {
                admin: {
                    id: id,
                    name: name,
                    email: email
                },
                token: (0, _jsonwebtoken.sign)({ id: id, email: email, isAdmin: true }, _jwt2.default.secret || 'secret', {
                    expiresIn: _jwt2.default.expiresIn
                })
            };
        }
    }]);

    return AdminSessionRepository;
}();

exports.default = new AdminSessionRepository();