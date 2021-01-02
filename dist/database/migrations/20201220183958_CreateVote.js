'use strict';

exports.up = function (knex) {
    return knex.schema.createTable('votes', function (table) {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.integer('vote').notNullable();
        table.uuid('movie_id').notNullable().references('id').inTable('movies');
        table.uuid('user_id').notNullable().references('id').inTable('users');
        table.boolean('deleted').notNullable().defaultTo(false);
        table.timestamps(false, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('votes');
};