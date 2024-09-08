// Update with your config settings.
const path = require('path');
require('dotenv').config({ path: '.env' });

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST_DEV,
      user: process.env.DB_USER_DEV,
      password: process.env.DB_PASS_DEV,
      database: process.env.DB_NAME_DEV,
    },
    pool: {
      min: 2,
      max: 20,  // Increase max connections if needed
    },
    migrations: {
      directory: path.join(__dirname, '/db/migrations'),
      tableName: 'pg_migrations',
    },
    seeds: {
      directory: path.join(__dirname, '/db/seeds'),
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.CLEARDB_HOST,
      user: process.env.CLEARDB_USER,
      password: process.env.CLEARDB_PASS,
      database: process.env.CLEARDB_DB,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 20,  // Increase max connections if needed
    },
    migrations: {
      directory: path.join(__dirname, '/db/migrations'),
      tableName: 'pg_migrations',
    },
    seeds: {
      directory: path.join(__dirname, '/db/seeds'),
    },
  },
};