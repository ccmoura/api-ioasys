exports.up = function (knex) {
    return knex.schema.alterTable('movies', (table) => {
        table.string('director').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.table('movies', (table) => {
        table.dropColumn('director');
    });
};
