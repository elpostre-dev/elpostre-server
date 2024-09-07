exports.up = function (knex) {
    return knex.schema
        .createTable('OrderProducts', table => {
            table.uuid('sOrderProductId')
                .unique()
                .primary().defaultTo('');
            table.uuid('sOrderId').references('sOrderId').inTable('Orders')
            table.uuid('sProductId').references('sProductId').inTable('Products')
            table.decimal('dPrice').defaultTo(0);
            table.integer('dQuantity').notNullable();
            table.boolean('bActive').defaultTo(true);
            table.timestamps(true, true);
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable('OrderProducts')
};
