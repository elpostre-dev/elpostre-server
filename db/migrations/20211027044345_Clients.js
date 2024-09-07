exports.up = function (knex) {
    return knex.schema
        .createTable('Clients', table => {
            table.uuid('sClientId')
                .unique()
                .primary().defaultTo('');
            table.string('sName').defaultTo('');
            table.string('sLastname').defaultTo('');
            table.string('sPhone').defaultTo('');
            table.string('sEmail').defaultTo('');
            table.boolean('bActive').defaultTo(true);
            table.timestamps(true, true);
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable('Clients')
};
