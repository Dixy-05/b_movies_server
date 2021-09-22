const { dbDevelopment } = require('../../db');

exports.up = async function (knex) {
  await dbDevelopment.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  return dbDevelopment.schema.createTable('movies', (table) => {
    table
      .uuid('id')
      .primary()
      .defaultTo(dbDevelopment.raw('uuid_generate_v4()'));
    table.string('title').notNullable();
    table.string('genre').notNullable();
    table.integer('year').notNullable();
    table.string('movie_length').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return dbDevelopment.schema.dropTable('movies');
};
