
exports.up = function(knex) {
  return knex.schema.createTable('states', tbl => {
    tbl.increments();
    tbl.string('state_name', 255).notNullable().unique().index();
    tbl.string('state_abbreviation', 255).notNullable();
    })
    .createTable('listings', tbl =>{
      tbl.increments();
      tbl.string('title', 255).notNullable().index();
      tbl.text('description').notNullable();
      tbl.decimal('price_per_day', 8, 2).notNullable();
      tbl.string('photo_url', 255).nullable();
      tbl.string('latitude', 255).nullable();
      tbl.string('longitude', 255).nullable();

      //foreign key users
      tbl.integer('owner_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

      //foreign key state
      tbl.integer('state_id')
      .unsigned()
      .references('id')
      .inTable('states')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
  .createTable('reservations', tbl => {
      tbl.increments();
      tbl.string('date_from').nullable();
      tbl.string('date_to').nullable();
      tbl.boolean('is_reserved').notNullable();
      
      //user foreign key
      tbl.integer('owner_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

      //listing foreign key
      tbl.integer('listing_id')
      .unsigned()
      .references('id')
      .inTable('listings')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('listings')
  .dropTableIfExists('states')
  .dropTableIfExists('reservations'); 
};
