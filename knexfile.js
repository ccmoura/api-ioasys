const path = require('path');

require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: process.env.PG_CONNECTION_STRING,
        searchPath: ['knex', 'public'],
        migrations: {
            directory: path.join(__dirname, 'src', 'database', 'migrations'),
        },
        seeds: {
            directory: path.join(__dirname, 'src', 'database', 'seeds'),
        },
    },

    staging: {
        client: 'pg',
        connection: process.env.PG_CONNECTION_STRING,
        searchPath: ['knex', 'public'],
        migrations: {
            directory: path.join(__dirname, 'src', 'database', 'migrations'),
        },
        seeds: {
            directory: path.join(__dirname, 'src', 'database', 'seeds'),
        },
    },

    production: {
        client: 'pg',
        connection: process.env.PG_CONNECTION_STRING,
        searchPath: ['knex', 'public'],
        migrations: {
            directory: path.join(__dirname, 'src', 'database', 'migrations'),
        },
        seeds: {
            directory: path.join(__dirname, 'src', 'database', 'seeds'),
        },
    },
};
