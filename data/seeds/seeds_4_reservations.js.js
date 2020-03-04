exports.seed = async function(knex, Promise) {
  await knex('reservations').del()
  await knex.raw('TRUNCATE TABLE reservations RESTART IDENTITY CASCADE')
  await knex('reservations').insert([

    {
      "user_id": 1,
      "listings_id": 2,
      "date_from": "March 3, 2020",
      "date_to": "March 7, 2020",
      "is_reserved": true
    },
    {
      "user_id": 2,
      "listings_id": 2,
      "date_from": "March 23, 2020",
      "date_to": "March 31, 2020",
      "is_reserved": true
    },
    {
      "user_id": 3,
      "listings_id": 3,
      "date_from": "March 3, 2020",
      "date_to": "March 7, 2020",
      "is_reserved": true
    },
    {
      "user_id": 2,
      "listings_id": 1,
      "date_from": "March 23 2020",
      "date_to": "March 31, 2020",
      "is_reserved": true
    }

])};