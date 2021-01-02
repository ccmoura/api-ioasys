'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _User = require('../../models/user/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserRepository = function () {
    function UserRepository() {
        _classCallCheck(this, UserRepository);
    }

    _createClass(UserRepository, [{
        key: 'store',
        value: async function store(user) {
            var userExists = await _User2.default.query().where({ email: user.email });

            if (userExists.length > 0) {
                return { error: 'E-mail already registered' };
            }

            user.password_hash = _bcrypt2.default.hashSync(user.password, 10);

            delete user.password;
            delete user.repeat_password;

            var newUser = await _User2.default.query().insert(user);

            return newUser;
        }
    }, {
        key: 'update',
        value: async function update(user, userId) {
            if (user.password) {
                user.password_hash = _bcrypt2.default.hashSync(user.password, 10);

                delete user.password;
                delete user.repeat_password;
            }

            var updated = await _User2.default.query().findById(userId).patch(user);

            delete updated.password_hash;

            return user;
        }
    }, {
        key: 'delete',
        value: async function _delete(userId) {
            var deleted = await _User2.default.query().findById(userId).patch({ deleted: true });

            return deleted;
        }
    }]);

    return UserRepository;
}();

exports.default = new UserRepository();