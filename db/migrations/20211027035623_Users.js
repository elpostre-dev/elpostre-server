exports.up = function (knex) {
    return knex.schema
        .createTable('Users', table => {
            table.uuid('sUserId')
                .unique()
                .primary().defaultTo('');
            table.string('sName').defaultTo('');
            table.string('sLastname').defaultTo('');
            table.string('sEmail').notNullable();
            table.string('sPassword').notNullable();
            table.boolean('bActive').defaultTo(true);
            table.timestamps(true, true);
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable('Users')
};
