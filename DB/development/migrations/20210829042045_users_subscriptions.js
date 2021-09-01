const { dbDevelopment } = require('../../db');

exports.up = async function (knex) {
  await dbDevelopment.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  return dbDevelopment.schema.createTable('users_subscriptions', (table) => {
    table
      .uuid('id')
      .primary()
      .defaultTo(dbDevelopment.raw('uuid_generate_v4()'));
    table.uuid('user_id').notNullable();
    table.uuid('subscription_id').notNullable();
    table.date('month_start').notNullable();
    table.date('month_end').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return dbDevelopment.schema.dropTable('users_subscriptions');
};
