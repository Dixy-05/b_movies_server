// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: 'postgres',
    connection: {
      database: 'b_movies_dev',
      user: 'postgres',
      password: 'post12345G',
      port: 5433,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './DB/development/migrations',
    },
    seeds: {
      directory: './DB/development/seeds',
    },
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },

  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 1,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './DB/production/migrations',
    },
    seeds: {
      directory: './DB/production/seeds',
    },
  },
};
