
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: "testyMcTesty",
          password: "password12345",
          is_land_owner: true
        },
        {
          username: "userMcUser",
          password: "password12345",
          is_land_owner: false
        }
      ]);
    });
};
