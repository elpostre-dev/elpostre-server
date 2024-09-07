// Update with your config settings.
const path = require('path')
require('dotenv').config({ path: '.env' })

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST_DEV,
      user: process.env.DB_USER_DEV,
      password: process.env.DB_PASS_DEV,
      database: process.env.DB_NAME_DEV,
      port: 3306
    },
    migrations: {
      directory: path.join(__dirname, '/db/migrations'),
      tableName: 'mysql2_migrations'
    },
    seeds: {
      directory: path.join(__dirname, '/db/seeds')
    },
    pool: {
      min: 2,
      max: 10
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: process.env.CLEARDB_HOST,
      user: process.env.CLEARDB_USER,
      password: process.env.CLEARDB_PASS,
      database: process.env.CLEARDB_DB,
    },
    migrations: {
      directory: path.join(__dirname, '/db/migrations'),
      tableName: 'mysql_migrations'
    },
    seeds: {
      directory: path.join(__dirname, '/db/seeds')
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
