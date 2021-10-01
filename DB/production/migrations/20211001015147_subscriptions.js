const { dbProduction } = require('../../db');

exports.up = async function (knex) {
  await dbProduction.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  return dbProduction.schema.createTable('subscriptions', (table) => {
    table
      .uuid('id')
      .primary()
      .defaultTo(dbProduction.raw('uuid_generate_v4()'));
    table.string('type').notNullable().unique();
    table.string('detail').notNullable();
    table.integer('months').notNullable().unique();
    table.decimal('price').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return dbProduction.schema.dropTable('subscriptions');
};
