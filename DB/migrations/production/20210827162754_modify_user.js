const { dbProduction } = require('../../db');

exports.up = function (knex) {
  return dbProduction.schema.alterTable('users', (table) => {
    table.string('user_phone').unique().alter();
  });
};

exports.down = function (knex) {
  return dbProduction.schema.alterTable('users', (table) => {
    table.integer('user_phone').notNullable().unique();
  });
};
