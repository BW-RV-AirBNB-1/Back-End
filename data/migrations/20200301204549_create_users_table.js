
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();

      tbl.string('username', 255).notNullable().unique().index();
      tbl.string('password', 255).notNullable();
      tbl.boolean('is_land_owner').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
