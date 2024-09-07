exports.up = function (knex) {
    return knex.schema
        .createTable('Categories', table => {
            table.uuid('sCategoryId')
                .unique()
                .primary().defaultTo('');
            table.string('sName').defaultTo('');
            table.boolean('bActive').defaultTo(true);
            table.timestamps(true, true);
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable('Categories')
};
