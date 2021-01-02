'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _Admin = require('../../models/admin/Admin');

var _Admin2 = _interopRequireDefault(_Admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminRepository = function () {
    function AdminRepository() {
        _classCallCheck(this, AdminRepository);
    }

    _createClass(AdminRepository, [{
        key: 'store',
        value: async function store(admin) {
            var adminExists = await _Admin2.default.query().where({ email: admin.email });

            if (adminExists.length > 0) {
                return { error: 'E-mail already registered' };
            }

            admin.password_hash = _bcrypt2.default.hashSync(admin.password, 10);

            delete admin.password;
            delete admin.repeat_password;

            var newAdmin = await _Admin2.default.query().insert(admin);

            return newAdmin;
        }
    }, {
        key: 'update',
        value: async function update(admin, adminId) {
            if (admin.password) {
                admin.password_hash = _bcrypt2.default.hashSync(admin.password, 10);

                delete admin.password;
                delete admin.repeat_password;
            }

            var updated = await _Admin2.default.query().findById(adminId).patch(admin);

            delete updated.password_hash;

            return admin;
        }
    }, {
        key: 'delete',
        value: async function _delete(adminId) {
            var deleted = await _Admin2.default.query().findById(adminId).patch({ deleted: true });

            return deleted;
        }
    }]);

    return AdminRepository;
}();

exports.default = new AdminRepository();