exports.up = function (knex) {
    return knex.schema.createTable('admins', (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('email').unique().notNullable();
        table.string('password_hash').notNullable();
        table.string('name').notNullable();
        table.boolean('deleted').notNullable().defaultTo(false);
        table.timestamps(false, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('admins');
};
