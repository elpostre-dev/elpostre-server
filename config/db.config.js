const environment = process.env.NODE_ENV;
const config = require('../knexfile')[environment]

const db = require('knex')(config);

// Enable query logging
db.on('query', query => {
    console.log(query.sql);
});

module.exports = { db }