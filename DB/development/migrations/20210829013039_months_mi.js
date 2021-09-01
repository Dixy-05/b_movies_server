const { dbDevelopment } = require('../../db');

exports.up = function (knex) {
  return dbDevelopment.schema.createTable('months', (table) => {
    table.increments('id');
    table.string('month').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return dbDevelopment.schema.dropTable('months');
};
