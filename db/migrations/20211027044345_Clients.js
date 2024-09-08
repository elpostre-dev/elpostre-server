exports.up = function (knex) {
    return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        .then(function () {
            return knex.schema.createTable('Clients', table => {
                table.uuid('sClientId').defaultTo(knex.raw('uuid_generate_v4()')).primary();
                table.string('sName').defaultTo('');
                table.string('sLastname').defaultTo('');
                table.string('sPhone').defaultTo('');
                table.string('sEmail').defaultTo('');
                table.boolean('bActive').defaultTo(true);
                table.timestamps(true, true);
            });
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable('Clients');
};
