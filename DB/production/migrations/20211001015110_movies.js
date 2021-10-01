const { dbProduction } = require('../../db');

exports.up = async function (knex) {
  await dbProduction.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  return dbProduction.schema.createTable('movies', (table) => {
    table
      .uuid('id')
      .primary()
      .defaultTo(dbProduction.raw('uuid_generate_v4()'));
    table.string('title').notNullable();
    table.string('genre').notNullable();
    table.integer('year').notNullable();
    table.string('movie_length').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return dbProduction.schema.dropTable('movies');
};
