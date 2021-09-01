const { dbDevelopment } = require('../../db');

exports.up = function (knex) {
  return dbDevelopment.schema.createTable('movies', (table) => {
    table.increments('id');
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
