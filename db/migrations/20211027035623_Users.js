exports.up = function (knex) {
    return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        .then(function () {
            return knex.schema.createTable('Users', table => {
                table.uuid('sUserId').defaultTo(knex.raw('uuid_generate_v4()')).primary();
                table.string('sName').defaultTo('');
                table.string('sLastname').defaultTo('');
                table.string('sEmail').notNullable();
                table.string('sPassword').notNullable();
                table.boolean('bActive').defaultTo(true);
                table.timestamps(true, true);
            });
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable('Users');
};