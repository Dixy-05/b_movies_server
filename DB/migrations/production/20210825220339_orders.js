const { dbProduction } = require('../../db');

exports.up = function (knex) {
  return dbProduction.schema.createTable('orders', (table) => {
    table.increments('id');
    table.uuid('user_id').notNullable();
    table.integer('movie_id').notNullable();
    table.uuid('subscription_id').notNullable();
    table.integer('month_id').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return dbProduction.schema.dropTable('orders');
};
