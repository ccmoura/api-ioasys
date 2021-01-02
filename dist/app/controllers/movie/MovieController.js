'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MovieRepository = require('../../repositories/movie/MovieRepository');

var _MovieRepository2 = _interopRequireDefault(_MovieRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovieController = function () {
    function MovieController() {
        _classCallCheck(this, MovieController);
    }

    _createClass(MovieController, [{
        key: 'index',
        value: async function index(request, response) {
            var filters = request.query;

            var movies = await _MovieRepository2.default.index(filters);

            return response.status(200).json(movies);
        }
    }, {
        key: 'store',
        value: async function store(request, response) {
            var movie = request.body;
            var newMovie = await _MovieRepository2.default.store(movie);

            return response.status(201).json(newMovie);
        }
    }]);

    return MovieController;
}();

exports.default = new MovieController();