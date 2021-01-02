'use strict';

exports.up = function (knex) {
    return knex.schema.alterTable('movies', function (table) {
        table.string('director').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.table('movies', function (table) {
        table.dropColumn('director');
    });
};