exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {
          title: 'test title 1',
          description: 'this is a test description for 1',
          price_per_day: 24.99,
          photo_url: 'https://unsplash.com/photos/-Avc2AiE1_Q',
          user_id: 1,
          state_id: 52
        },
        {
          title: 'test title 2',
          description: 'this is a test description for 2',
          price_per_day: 55.99,
          photo_url: 'https://unsplash.com/photos/-Avc2AiE1_Q',
          user_id: 2,
          state_id: 52
        },
        {
          title: 'test title 3',
          description: 'this is a test description for 3',
          price_per_day: 99.99,
          photo_url: 'https://unsplash.com/photos/-Avc2AiE1_Q',
          user_id: 1,
          state_id: 52
        },
      ]);
    });
};
