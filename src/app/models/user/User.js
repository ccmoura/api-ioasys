import { Model } from 'objection';
import connection from '../../../database/connection';

Model.knex(connection);

class User extends Model {
    static get tableName() {
        return 'users';
    }

    static get schema() {
        return {
            type: 'object',
            required: ['email', 'password_hash', 'name'],
            properties: {
                id: { type: 'uuid' },
                email: { type: 'string' },
                name: { type: 'string' },
                password_hash: { type: 'string' },
                deleted: { type: 'boolean' },
            },
        };
    }
}

export default User;
