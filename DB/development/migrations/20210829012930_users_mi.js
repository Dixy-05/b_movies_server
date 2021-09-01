const { dbDevelopment } = require('../../db');

exports.up = async function (knex) {
  await dbDevelopment.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  return dbDevelopment.schema.createTable('users', (table) => {
    table
      .uuid('id')
      .primary()
      .defaultTo(dbDevelopment.raw('uuid_generate_v4()'));
    table.string('user_name').notNullable().unique();
    table.string('user_email').notNullable().unique();
    table.string('user_password').notNullable().unique(); //this one was modified to a string, with a migration
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return dbDevelopment.schema.dropTable('users');
};
