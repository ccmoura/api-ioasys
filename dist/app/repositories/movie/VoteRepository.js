'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vote = require('../../models/movie/Vote');

var _Vote2 = _interopRequireDefault(_Vote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VoteRepository = function () {
    function VoteRepository() {
        _classCallCheck(this, VoteRepository);
    }

    _createClass(VoteRepository, [{
        key: 'store',
        value: async function store(vote) {
            var voteExists = await _Vote2.default.query().findOne({
                deleted: false,
                user_id: vote.user_id,
                movie_id: vote.movie_id
            });

            if (voteExists) {
                delete vote.movie_id;
                delete vote.user_id;
                await _Vote2.default.query().patchAndFetchById(voteExists.id, vote);
            } else {
                await _Vote2.default.query().insert(vote);
            }

            return vote;
        }
    }]);

    return VoteRepository;
}();

exports.default = new VoteRepository();