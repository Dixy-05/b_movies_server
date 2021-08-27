const { dbProduction } = require('../../db');

exports.up = async function (knex) {
  await dbProduction.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  return dbProduction.schema.createTable('users', (table) => {
    table
      .uuid('id')
      .primary()
      .defaultTo(dbProduction.raw('uuid_generate_v4()'));
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('user_email').notNullable().unique();
    table.integer('user_phone').notNullable().unique(); //this one was modified to a string, with a migration
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return dbProduction.schema.dropTable('users');
};
