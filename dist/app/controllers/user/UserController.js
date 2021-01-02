'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UserRepository = require('../../repositories/user/UserRepository');

var _UserRepository2 = _interopRequireDefault(_UserRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = function () {
    function UserController() {
        _classCallCheck(this, UserController);
    }

    _createClass(UserController, [{
        key: 'store',
        value: async function store(request, response) {
            var user = request.body;
            var newUser = await _UserRepository2.default.store(user);

            return response.status(201).json(newUser);
        }
    }, {
        key: 'update',
        value: async function update(request, response) {
            var user = request.body;
            var updated = await _UserRepository2.default.update(user, request.userId);

            return response.status(200).json(updated);
        }
    }, {
        key: 'delete',
        value: async function _delete(request, response) {
            await _UserRepository2.default.delete(request.userId);

            return response.status(200).json({ message: 'User deleted' });
        }
    }]);

    return UserController;
}();

exports.default = new UserController();