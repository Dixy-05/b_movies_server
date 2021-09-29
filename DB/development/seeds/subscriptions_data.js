exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('subscriptions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('subscriptions').insert([
        {
          id: '917b91a1-9860-4b3f-89aa-05c685ef6db3',
          type: 'silver premium',
          detail: '15 movies per month',
          months: 15,
          price: '12.99',
          created_at: '2021-08-27T05:40:09.659Z',
          updated_at: '2021-08-27T05:40:09.659Z',
        },
        {
          id: '49e10bfb-901d-4574-bdc1-ae47e9a6d2fb',
          type: 'gold premium',
          detail: '30 movies per month',
          months: 30,
          price: '19.99',
          created_at: '2021-08-27T05:41:01.470Z',
          updated_at: '2021-08-27T05:41:01.470Z',
        },
        {
          id: '7efa287e-9cbd-4235-b79b-0d050af75320',
          type: 'basic',
          detail: '3 movies per month',
          months: 3,
          price: '3.99',
          created_at: '2021-08-27T05:37:14.034Z',
          updated_at: '2021-08-27T05:37:14.034Z',
        },
        {
          id: '51a766d4-f986-4c4a-94d2-5f35cedf368c',
          type: 'premium',
          detail: '6 movies per month',
          months: 6,
          price: '3.99',
          created_at: '2021-08-27T05:38:36.832Z',
          updated_at: '2021-08-27T05:38:36.832Z',
        },
      ]);
    });
};
