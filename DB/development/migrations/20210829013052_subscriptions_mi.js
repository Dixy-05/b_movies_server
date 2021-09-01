const { dbDevelopment } = require('../../db');

exports.up = async function (knex) {
  await dbDevelopment.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  return dbDevelopment.schema.createTable('subscriptions', (table) => {
    table
      .uuid('id')
      .primary()
      .defaultTo(dbDevelopment.raw('uuid_generate_v4()'));
    table.string('type').notNullable().unique();
    table.string('detail').notNullable();
    table.integer('movies_monthly').notNullable().unique();
    table.decimal('price').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return dbDevelopment.schema.dropTable('subscriptions');
};
