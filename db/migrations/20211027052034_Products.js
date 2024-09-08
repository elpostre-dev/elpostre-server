exports.up = function (knex) {
    return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        .then(function () {
            return knex.schema.createTable('Products', table => {
                table.uuid('sProductId').defaultTo(knex.raw('uuid_generate_v4()')).primary();
                table.uuid('sCategoryId').references('sCategoryId').inTable('Categories').onDelete('CASCADE');
                table.string('sName').defaultTo('');
                table.decimal('dPrice').defaultTo(0);
                table.boolean('bActive').defaultTo(true);
                table.timestamps(true, true);
            });
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable('Products');
};
