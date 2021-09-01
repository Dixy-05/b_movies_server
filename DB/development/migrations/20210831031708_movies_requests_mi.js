const { dbDevelopment } = require('../../db');

exports.up = async function (knex) {
  await dbDevelopment.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  return dbDevelopment.schema.createTable('movies_requests', (table) => {
    table
      .uuid('id')
      .primary()
      .defaultTo(dbDevelopment.raw('uuid_generate_v4()'));
    table.uuid('user_id').notNullable();
    table.uuid('user_subscription_id').notNullable();
    table.integer('movie_id').notNullable();
    table.integer('month_id').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return dbDevelopment.schema.dropTable('movies_requests');
};
