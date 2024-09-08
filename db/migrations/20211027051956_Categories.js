exports.up = function (knex) {
    return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        .then(function () {
            return knex.schema.createTable('Categories', table => {
                table.uuid('sCategoryId').defaultTo(knex.raw('uuid_generate_v4()')).primary();
                table.string('sName').defaultTo('');
                table.boolean('bActive').defaultTo(true);
                table.timestamps(true, true);
            });
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable('Categories');
};
