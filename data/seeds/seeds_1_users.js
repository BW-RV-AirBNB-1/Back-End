const bcrypt = require('bcryptjs');

const salt=  bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('password12345', salt);

exports.seed = async function(knex, Promise){
    await knex('users').del()
    await knex.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
    await knex('users').insert([
      {
        username: 'testyMcTesty',
        password: hash,
        is_land_owner: true
      },
      {
        username: 'userMcUser',
        password: hash,
        is_land_owner: false
      },
      {
        username: 'johnnyDoeDoe',
        password: hash,
        is_land_owner: false
      }

    ]);
 }
