const { dbProduction } = require('../../db');

exports.up = function (knex) {
  return dbProduction.schema.createTable('months', (table) => {
    table.increments('id');
    table.string('month').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return dbProduction.schema.dropTable('months');
};
