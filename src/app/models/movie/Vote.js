import { Model } from 'objection';
import connection from '../../../database/connection';

Model.knex(connection);

class Vote extends Model {
    static get tableName() {
        return 'votes';
    }

    static get schema() {
        return {
            type: 'object',
            required: ['vote', 'movie_id', 'user_id'],
            properties: {
                id: { type: 'uuid' },
                movie_id: { type: 'uuid' },
                user_id: { type: 'uuid' },
                vote: { type: 'integer' },
                deleted: { type: 'boolean' },
            },
        };
    }
}

export default Vote;
