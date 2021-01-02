import { Model } from 'objection';

import connection from '../../../database/connection';
import Vote from './Vote';

Model.knex(connection);

class Movie extends Model {
    static get tableName() {
        return 'movies';
    }

    static get relationMappings() {
        return {
            votes: {
                relation: Model.HasManyRelation,
                modelClass: Vote,
                join: {
                    from: 'votes.movie_id',
                    to: 'movies.id',
                },
            },
        };
    }

    static get schema() {
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
                deleted: { type: 'boolean' },
            },
        };
    }
}

export default Movie;
