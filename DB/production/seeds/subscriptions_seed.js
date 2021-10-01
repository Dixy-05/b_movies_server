exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('subscriptions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('subscriptions').insert([
        {
          type: 'silver premium',
          detail: '6 months subscription',
          months: 6,
          price: '15.99',
        },
        {
          type: 'gold premium',
          detail: '4 moths subscription',
          months: 4,
          price: '9.99',
        },
        {
          type: 'premium',
          detail: '2 months subscription',
          months: 2,
          price: '5.99',
        },
        {
          type: 'basic',
          detail: '1 month subscription',
          months: 1,
          price: '3.99',
        },
      ]);
    });
};
