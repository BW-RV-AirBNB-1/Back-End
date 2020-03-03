
exports.seed = async function(knex, Promise) {
  await knex('listings').del()
  await knex.raw('TRUNCATE TABLE listings RESTART IDENTITY CASCADE')
  await knex('listings').insert([
    {
      title: 'test title 1',
      description: 'this is a test description for 1',
      price_per_day: 24.99,
      photo_url: 'https://unsplash.com/photos/-Avc2AiE1_Q',
      user_id: 1,
      state_id: 45
    },
    {
      title: 'test title 2',
      description: 'this is a test description for 2',
      price_per_day: 55.99,
      photo_url: 'https://unsplash.com/photos/-Avc2AiE1_Q',
      user_id: 2,
      state_id: 10
    },
    {
      title: 'test title 3',
      description: 'this is a test description for 3',
      price_per_day: 99.99,
      photo_url: 'https://unsplash.com/photos/-Avc2AiE1_Q',
      user_id: 3,
      state_id: 23
    },
    {
      title: 'test title 4',
      description: 'this is a test description for 4',
      price_per_day: 25.99,
      photo_url: 'https://unsplash.com/photos/-Avc2AiE1_Q',
      user_id: 1,
      state_id: 34
    },

  ]);
};
