const { dbProduction } = require('../../db');

exports.up = async function (knex) {
  await dbProduction.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  return dbProduction.schema.createTable('admin_users', (table) => {
    table
      .uuid('id')
      .primary()
      .defaultTo(dbProduction.raw('uuid_generate_v4()'));
    table.string('email').notNullable().unique();
    table.string('password').notNullable().unique(); //this one was modified to a string, with a migration
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return dbProduction.schema.dropTable('admin_users');
};
