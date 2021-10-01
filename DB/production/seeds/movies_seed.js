exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('movies')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          title: 'Jurassic Park',
          genre: 'science ficcion',
          year: 1993,
          movie_length: '02:08:00',
        },
        {
          title: 'Tomb Raider',
          genre: 'action',
          year: 2013,
          movie_length: '02:02:00',
        },
        {
          title: 'Escape from New York',
          genre: 'action',
          year: 1981,
          movie_length: '01:46:00',
        },
        {
          title: 'The Rock',
          genre: 'action',
          year: 1996,
          movie_length: '02:16:00',
        },
        {
          title: 'Speed',
          genre: 'action',
          year: 1994,
          movie_length: '01:56:00',
        },
        {
          title: 'Wonder Woman',
          genre: 'action',
          year: 2017,
          movie_length: '02:29:00',
        },
        {
          title: 'Predator',
          genre: 'action',
          year: 1987,
          movie_length: '01:47:00',
        },
        {
          title: 'Avengers:Endgame',
          genre: 'action',
          year: 2019,
          movie_length: '03:02:00',
        },
        {
          title: 'Total recall',
          genre: 'action',
          year: 1990,
          movie_length: '01:53:00',
        },
        {
          title: 'Logan',
          genre: 'action',
          year: 2017,
          movie_length: '02:21:00',
        },
        {
          title: 'Snowpiercer',
          genre: 'science fiction',
          year: 2013,
          movie_length: '02:06:00',
        },
        {
          title: 'Disctrict 9',
          genre: 'science fiction',
          year: 2009,
          movie_length: '01:52:00',
        },
        {
          title: 'Invasion Of The Body Snatchers',
          genre: 'science fiction',
          year: 1978,
          movie_length: '01:57:00',
        },
        {
          title: '12 Monkeys',
          genre: 'science fiction',
          year: 1995,
          movie_length: '02:11:00',
        },
        {
          title: 'Artificial Intelligence',
          genre: 'science fiction',
          year: 2001,
          movie_length: '02:26:00',
        },
        {
          title: 'Avatar',
          genre: 'science fiction',
          year: 2009,
          movie_length: '02:42:00',
        },
        {
          title: 'Manority Report',
          genre: 'science fiction',
          year: 2002,
          movie_length: '02:26:00',
        },
        {
          title: 'Wall-E',
          genre: 'science fiction',
          year: 2008,
          movie_length: '01:43:00',
        },
        {
          title: 'Guardians Of The Galaxy',
          genre: 'science fiction',
          year: 2014,
          movie_length: '02:05:00',
        },
        {
          title: 'Kung Fu Hustle',
          genre: 'comedy',
          year: 2004,
          movie_length: '01:39:00',
        },
        {
          title: 'Meet The Parents',
          genre: 'comedy',
          year: 2000,
          movie_length: '01:48:00',
        },
        {
          title: 'Palm Springs',
          genre: 'comedy',
          year: 2020,
          movie_length: '01:30:00',
        },
        {
          title: 'The Mask',
          genre: 'comedy',
          year: 1994,
          movie_length: '01:41:00',
        },
        {
          title: 'School Of Rock',
          genre: 'comedy',
          year: 2003,
          movie_length: '01:49:00',
        },
        {
          title: 'Ace Ventura, Pet Detective',
          genre: 'comedy',
          year: 1994,
          movie_length: '01:27:00',
        },
        {
          title: 'Mrs Doubtfire',
          genre: 'comedy',
          year: 1993,
          movie_length: '02:06:00',
        },
        {
          title: 'Coming To America',
          genre: 'comedy',
          year: 1988,
          movie_length: '01:57:00',
        },
        {
          title: 'Shaun Of The Dead',
          genre: 'comedy',
          year: 2004,
          movie_length: '01:40:00',
        },
        {
          title: 'Zoolander',
          genre: 'comedy',
          year: 2001,
          movie_length: '01:45:00',
        },
        {
          title: 'The Naked Gun',
          genre: 'comedy',
          year: 1988,
          movie_length: '01:25:00',
        },
      ]);
    });
};
