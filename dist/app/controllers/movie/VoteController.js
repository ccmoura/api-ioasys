'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VoteRepository = require('../../repositories/movie/VoteRepository');

var _VoteRepository2 = _interopRequireDefault(_VoteRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VoteController = function () {
    function VoteController() {
        _classCallCheck(this, VoteController);
    }

    _createClass(VoteController, [{
        key: 'store',
        value: async function store(request, response) {
            var vote = request.body;
            vote.user_id = request.userId;
            var newVote = await _VoteRepository2.default.store(vote);

            return response.status(201).json(newVote);
        }
    }]);

    return VoteController;
}();

exports.default = new VoteController();