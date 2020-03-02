const knex = require('knex');

const knexfile = require('../knexfileknexfile');

const env = process.env.DB_ENV || 'development'

module.exports = knex(knexfile[env]);