exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Marlon',
          last_name: 'Saravia',
          user_email: 'marsar@gmail.com',
          user_phone: '547891',
        },
        {
          first_name: 'Carlos',
          last_name: 'Newman',
          user_email: 'otto@gmail.com',
          user_phone: '958423',
        },
        {
          first_name: 'Robert',
          last_name: 'Doon',
          user_email: 'robert@gmail.com',
          user_phone: '958422',
        },
        {
          first_name: 'Sally',
          last_name: 'Durmand',
          user_email: 'sally@gmail.com',
          user_phone: '978822',
        },
        {
          first_name: 'Tareen',
          last_name: 'Sulivan',
          user_email: 'tareen@gmail.com',
          user_phone: '973822',
        },
      ]);
    });
};
