'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Movie = require('../../models/movie/Movie');

var _Movie2 = _interopRequireDefault(_Movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovieRepository = function () {
    function MovieRepository() {
        _classCallCheck(this, MovieRepository);
    }

    _createClass(MovieRepository, [{
        key: 'index',
        value: async function index(filters) {
            var director = filters.director,
                name = filters.name,
                gender = filters.gender,
                actors = filters.actors;


            var allMovies = await _Movie2.default.query().withGraphFetched('votes');
            var filtered = allMovies;

            if (director) {
                filtered = filtered.filter(function (movie) {
                    return movie.director.toLowerCase().includes(director.toLowerCase());
                });
            }

            if (name) {
                filtered = filtered.filter(function (movie) {
                    return movie.name.toLowerCase().includes(name.toLowerCase());
                });
            }

            if (gender) {
                filtered = filtered.filter(function (movie) {
                    return movie.gender.toLowerCase().includes(gender.toLowerCase());
                });
            }

            if (actors) {
                filtered = filtered.filter(function (movie) {
                    return movie.actors.toLowerCase().includes(actors.toLowerCase());
                });
            }

            filtered.forEach(function (movie) {
                if (movie.votes) {
                    var votesArray = movie.votes.map(function (vote) {
                        return vote.vote;
                    });
                    movie.votesAverage = votesArray.reduce(function (accumulator, currentValue) {
                        return accumulator + currentValue;
                    }) / movie.votes.length;
                    movie.totalVotes = movie.votes.length;
                    delete movie.votes;
                } else {
                    movie.votesAverage = 0;
                    movie.totalVotes = movie.votes.length;
                    delete movie.votes;
                }
            });

            return filtered;
        }
    }, {
        key: 'store',
        value: async function store(movie) {
            var newMovie = await _Movie2.default.query().insert(movie);

            return newMovie;
        }
    }]);

    return MovieRepository;
}();

exports.default = new MovieRepository();