exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('months')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('months').insert([
        { id: 1, month: 'January' },
        { id: 2, month: 'February' },
        { id: 3, month: 'March' },
        { id: 4, month: 'April' },
        { id: 5, month: 'May' },
        { id: 6, month: 'June' },
        { id: 7, month: 'July' },
        { id: 8, month: 'August' },
        { id: 9, month: 'September' },
        { id: 10, month: 'October' },
        { id: 11, month: 'November' },
        { id: 12, month: 'December' },
      ]);
    });
};
