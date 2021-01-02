'use strict';

exports.up = function (knex) {
    return knex.schema.createTable('movies', function (table) {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.string('gender').notNullable();
        table.string('actors').notNullable();
        table.boolean('deleted').notNullable().defaultTo(false);
        table.timestamps(false, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('movies');
};