exports.up = function (knex) {
    return knex.schema
        .createTable('Products', table => {
            table.uuid('sProductId')
                .unique()
                .primary().defaultTo('');
            table.uuid('sCategoryId').references('sCategoryId').inTable('Categories')
            table.string('sName').defaultTo('');
            table.decimal('dPrice').defaultTo(0);
            table.boolean('bActive').defaultTo(true);
            table.timestamps(true, true);
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable('Products')
};
