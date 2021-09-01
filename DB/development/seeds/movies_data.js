exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('movies')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          id: 2,
          title: 'Jurassic Park',
          genre: 'science ficcion',
          year: 1993,
          movie_length: '02:08:00',
          created_at: '2021-08-27T02:43:41.599Z',
          updated_at: '2021-08-27T02:43:41.599Z',
        },
        {
          id: 1,
          title: 'Tomb Raider',
          genre: 'action',
          year: 2013,
          movie_length: '02:02:00',
          created_at: '2021-08-27T00:13:18.420Z',
          updated_at: '2021-08-27T00:13:18.420Z',
        },
        {
          id: 17,
          title: 'Escape from New York',
          genre: 'action',
          year: 1981,
          movie_length: '01:46:00',
          created_at: '2021-08-27T23:20:18.512Z',
          updated_at: '2021-08-27T23:20:18.512Z',
        },
        {
          id: 18,
          title: 'The Rock',
          genre: 'action',
          year: 1996,
          movie_length: '02:16:00',
          created_at: '2021-08-27T23:21:31.317Z',
          updated_at: '2021-08-27T23:21:31.317Z',
        },
        {
          id: 19,
          title: 'Speed',
          genre: 'action',
          year: 1994,
          movie_length: '01:56:00',
          created_at: '2021-08-27T23:22:52.827Z',
          updated_at: '2021-08-27T23:22:52.827Z',
        },
        {
          id: 20,
          title: 'Wonder Woman',
          genre: 'action',
          year: 2017,
          movie_length: '02:29:00',
          created_at: '2021-08-27T23:24:08.459Z',
          updated_at: '2021-08-27T23:24:08.459Z',
        },
        {
          id: 21,
          title: 'Predator',
          genre: 'action',
          year: 1987,
          movie_length: '01:47:00',
          created_at: '2021-08-27T23:24:54.593Z',
          updated_at: '2021-08-27T23:24:54.593Z',
        },
        {
          id: 22,
          title: 'Avengers:Endgame',
          genre: 'action',
          year: 2019,
          movie_length: '03:02:00',
          created_at: '2021-08-27T23:26:18.235Z',
          updated_at: '2021-08-27T23:26:18.235Z',
        },
        {
          id: 23,
          title: 'Total recall',
          genre: 'action',
          year: 1990,
          movie_length: '01:53:00',
          created_at: '2021-08-27T23:27:05.547Z',
          updated_at: '2021-08-27T23:27:05.547Z',
        },
        {
          id: 24,
          title: 'Logan',
          genre: 'action',
          year: 2017,
          movie_length: '02:21:00',
          created_at: '2021-08-27T23:27:52.908Z',
          updated_at: '2021-08-27T23:27:52.908Z',
        },
        {
          id: 25,
          title: 'Snowpiercer',
          genre: 'science fiction',
          year: 2013,
          movie_length: '02:06:00',
          created_at: '2021-08-27T23:39:54.969Z',
          updated_at: '2021-08-27T23:39:54.969Z',
        },
        {
          id: 26,
          title: 'Disctrict 9',
          genre: 'science fiction',
          year: 2009,
          movie_length: '01:52:00',
          created_at: '2021-08-27T23:41:21.897Z',
          updated_at: '2021-08-27T23:41:21.897Z',
        },
        {
          id: 27,
          title: 'Invasion Of The Body Snatchers',
          genre: 'science fiction',
          year: 1978,
          movie_length: '01:57:00',
          created_at: '2021-08-27T23:43:04.831Z',
          updated_at: '2021-08-27T23:43:04.831Z',
        },
        {
          id: 28,
          title: '12 Monkeys',
          genre: 'science fiction',
          year: 1995,
          movie_length: '02:11:00',
          created_at: '2021-08-27T23:43:50.667Z',
          updated_at: '2021-08-27T23:43:50.667Z',
        },
        {
          id: 29,
          title: 'Artificial Intelligence',
          genre: 'science fiction',
          year: 2001,
          movie_length: '02:26:00',
          created_at: '2021-08-27T23:44:58.494Z',
          updated_at: '2021-08-27T23:44:58.494Z',
        },
        {
          id: 30,
          title: 'Avatar',
          genre: 'science fiction',
          year: 2009,
          movie_length: '02:42:00',
          created_at: '2021-08-27T23:45:29.717Z',
          updated_at: '2021-08-27T23:45:29.717Z',
        },
        {
          id: 31,
          title: 'Manority Report',
          genre: 'science fiction',
          year: 2002,
          movie_length: '02:26:00',
          created_at: '2021-08-27T23:47:29.456Z',
          updated_at: '2021-08-27T23:47:29.456Z',
        },
        {
          id: 32,
          title: 'Wall-E',
          genre: 'science fiction',
          year: 2008,
          movie_length: '01:43:00',
          created_at: '2021-08-27T23:48:16.846Z',
          updated_at: '2021-08-27T23:48:16.846Z',
        },
        {
          id: 33,
          title: 'Guardians Of The Galaxy',
          genre: 'science fiction',
          year: 2014,
          movie_length: '02:05:00',
          created_at: '2021-08-27T23:49:30.349Z',
          updated_at: '2021-08-27T23:49:30.349Z',
        },
        {
          id: 34,
          title: 'Kung Fu Hustle',
          genre: 'comedy',
          year: 2004,
          movie_length: '01:39:00',
          created_at: '2021-08-27T23:51:42.631Z',
          updated_at: '2021-08-27T23:51:42.631Z',
        },
        {
          id: 35,
          title: 'Meet The Parents',
          genre: 'comedy',
          year: 2000,
          movie_length: '01:48:00',
          created_at: '2021-08-27T23:52:37.151Z',
          updated_at: '2021-08-27T23:52:37.151Z',
        },
        {
          id: 36,
          title: 'Palm Springs',
          genre: 'comedy',
          year: 2020,
          movie_length: '01:30:00',
          created_at: '2021-08-27T23:53:39.327Z',
          updated_at: '2021-08-27T23:53:39.327Z',
        },
        {
          id: 37,
          title: 'The Mask',
          genre: 'comedy',
          year: 1994,
          movie_length: '01:41:00',
          created_at: '2021-08-27T23:54:19.761Z',
          updated_at: '2021-08-27T23:54:19.761Z',
        },
        {
          id: 38,
          title: 'School Of Rock',
          genre: 'comedy',
          year: 2003,
          movie_length: '01:49:00',
          created_at: '2021-08-27T23:55:14.344Z',
          updated_at: '2021-08-27T23:55:14.344Z',
        },
        {
          id: 39,
          title: 'Ace Ventura, Pet Detective',
          genre: 'comedy',
          year: 1994,
          movie_length: '01:27:00',
          created_at: '2021-08-27T23:57:17.299Z',
          updated_at: '2021-08-27T23:57:17.299Z',
        },
        {
          id: 40,
          title: 'Mrs Doubtfire',
          genre: 'comedy',
          year: 1993,
          movie_length: '02:06:00',
          created_at: '2021-08-27T23:58:32.892Z',
          updated_at: '2021-08-27T23:58:32.892Z',
        },
        {
          id: 41,
          title: 'Coming To America',
          genre: 'comedy',
          year: 1988,
          movie_length: '01:57:00',
          created_at: '2021-08-27T23:59:44.527Z',
          updated_at: '2021-08-27T23:59:44.527Z',
        },
        {
          id: 42,
          title: 'Shaun Of The Dead',
          genre: 'comedy',
          year: 2004,
          movie_length: '01:40:00',
          created_at: '2021-08-28T00:00:44.807Z',
          updated_at: '2021-08-28T00:00:44.807Z',
        },
        {
          id: 43,
          title: 'Zoolander',
          genre: 'comedy',
          year: 2001,
          movie_length: '01:45:00',
          created_at: '2021-08-28T00:01:19.702Z',
          updated_at: '2021-08-28T00:01:19.702Z',
        },
        {
          id: 44,
          title: 'The Naked Gun',
          genre: 'comedy',
          year: 1988,
          movie_length: '01:25:00',
          created_at: '2021-08-28T00:42:49.864Z',
          updated_at: '2021-08-28T00:42:49.864Z',
        },
      ]);
    });
};