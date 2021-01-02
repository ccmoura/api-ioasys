'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AdminRepository = require('../../repositories/admin/AdminRepository');

var _AdminRepository2 = _interopRequireDefault(_AdminRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminController = function () {
    function AdminController() {
        _classCallCheck(this, AdminController);
    }

    _createClass(AdminController, [{
        key: 'store',
        value: async function store(request, response) {
            var admin = request.body;
            var newAdmin = await _AdminRepository2.default.store(admin);

            return response.status(201).json(newAdmin);
        }
    }, {
        key: 'update',
        value: async function update(request, response) {
            var admin = request.body;
            var updated = await _AdminRepository2.default.update(admin, request.userId);

            return response.status(200).json(updated);
        }
    }, {
        key: 'delete',
        value: async function _delete(request, response) {
            await _AdminRepository2.default.delete(request.userId);

            return response.status(200).json({ message: 'Admin deleted' });
        }
    }]);

    return AdminController;
}();

exports.default = new AdminController();