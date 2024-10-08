exports.up = function (knex) {
    return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        .then(function () {
            return knex.schema.createTable('Orders', table => {
                table.uuid('sOrderId').defaultTo(knex.raw('uuid_generate_v4()')).primary();
                table.uuid('sClientId').references('sClientId').inTable('Clients').onDelete('CASCADE');
                table.enu('eEstablishment', ['Mississippi', 'Lomas']);
                table.integer('dPaid').defaultTo(0);
                table.integer('dTotal').defaultTo(0);
                table.date('tDay').notNullable();
                table.time('tHour').notNullable();
                table.boolean('bDelivery').defaultTo(false);
                table.boolean('bDelivered').defaultTo(false);
                table.string('sStreet').defaultTo('');
                table.string('sNumber').defaultTo('');
                table.string('sColonia').defaultTo('');
                table.string('sZip').defaultTo('');
                table.string('sSalesAgent').notNullable();
                table.string('sComment').defaultTo('');
                table.boolean('bActive').defaultTo(true);
                table.timestamps(true, true);
            });
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable('Orders');
};
