const db = require('knex');
const knexConfig = require('../knexfile');

exports.dbDevelopment = db(knexConfig.development);
exports.dbProduction = db(knexConfig.production);
