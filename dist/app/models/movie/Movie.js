'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _objection = require('objection');

var _connection = require('../../../database/connection');

var _connection2 = _interopRequireDefault(_connection);

var _Vote = require('./Vote');

var _Vote2 = _interopRequireDefault(_Vote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_objection.Model.knex(_connection2.default);

var Movie = function (_Model) {
    _inherits(Movie, _Model);

    function Movie() {
        _classCallCheck(this, Movie);

        return _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).apply(this, arguments));
    }

    _createClass(Movie, null, [{
        key: 'tableName',
        get: function get() {
            return 'movies';
        }
    }, {
        key: 'relationMappings',
        get: function get() {
            return {
                votes: {
                    relation: _objection.Model.HasManyRelation,
                    modelClass: _Vote2.default,
                    join: {
                        from: 'votes.movie_id',
                        to: 'movies.id'
                    }
                }
            };
        }
    }, {
        key: 'schema',
        get: function get() {
            return {
                type: 'object',
                required: ['description', 'gender', 'name', 'actors', 'director'],
                properties: {
                    id: { type: 'uuid' },
                    description: { type: 'string' },
                    name: { type: 'string' },
                    gender: { type: 'string' },
                    actors: { type: 'string' },
                    director: { type: 'string' },
                    deleted: { type: 'boolean' }
                }
            };
        }
    }]);

    return Movie;
}(_objection.Model);

exports.default = Movie;