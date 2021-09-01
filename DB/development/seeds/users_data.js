exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: '8f79e58f-7a2a-49bd-839a-8189cc27a11c',
          first_name: 'Marlon',
          last_name: 'Saravia',
          user_email: 'marsar@gmail.com',
          user_phone: '547891',
          created_at: '2021-08-26T14:40:11.945Z',
          updated_at: '2021-08-26T14:40:11.945Z',
        },
        {
          id: 'a02f02e2-d647-4eb7-8e2a-b2aff7d99d0b',
          first_name: 'Carlos',
          last_name: 'Newman',
          user_email: 'otto@gmail.com',
          user_phone: '958423',
          created_at: '2021-08-26T14:38:54.704Z',
          updated_at: '2021-08-26T14:38:54.704Z',
        },
        {
          id: '2b4b2749-9267-4eb2-b994-07997d0f817d',
          first_name: 'Robert',
          last_name: 'Doon',
          user_email: 'robert@gmail.com',
          user_phone: '958422',
          created_at: '2021-08-27T19:14:04.691Z',
          updated_at: '2021-08-27T19:14:04.691Z',
        },
        {
          id: '4372a203-bee9-4d4b-9d9d-cae672029a69',
          first_name: 'Sally',
          last_name: 'Durmand',
          user_email: 'sally@gmail.com',
          user_phone: '978822',
          created_at: '2021-08-27T19:20:43.242Z',
          updated_at: '2021-08-27T19:20:43.242Z',
        },
        {
          id: '26439a6e-60b0-48d7-a6ee-f2155886dee1',
          first_name: 'Tareen',
          last_name: 'Sulivan',
          user_email: 'tareen@gmail.com',
          user_phone: '973822',
          created_at: '2021-08-28T21:57:25.584Z',
          updated_at: '2021-08-28T21:57:25.584Z',
        },
      ]);
    });
};
