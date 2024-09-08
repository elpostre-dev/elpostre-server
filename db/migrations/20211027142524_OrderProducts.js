exports.up = function (knex) {
    return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        .then(function () {
            return knex.schema.createTable('OrderProducts', table => {
                table.uuid('sOrderProductId').defaultTo(knex.raw('uuid_generate_v4()')).primary();
                table.uuid('sOrderId').references('sOrderId').inTable('Orders').onDelete('CASCADE');
                table.uuid('sProductId').references('sProductId').inTable('Products').onDelete('CASCADE');
                table.decimal('dPrice').defaultTo(0);
                table.integer('dQuantity').notNullable();
                table.boolean('bActive').defaultTo(true);
                table.timestamps(true, true);
            });
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable('OrderProducts');
};
