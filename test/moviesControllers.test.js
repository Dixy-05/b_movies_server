const moviesControllers = require('../controllers/moviesControllers');
const moviesService = require('../service/moviesService');
jest.mock('../service/moviesService');
database = [
  { id: 1, title: 'movie1', genre: 'action' },
  { id: 2, title: 'movie2', genre: 'comedy' },
  { id: 3, title: 'movie3', genre: 'sci-fi' },
  { id: 4, title: 'movie4', genre: 'horror' },
];
const addMovie = () => {
  database.push({ id: 5, title: 'movie5', genre: 'drama' });
  const movie = database.filter((movie) => movie.id === 5);
  return movie;
};

const useReq = () => ({
  params: { id: '5efff426-b41b-4439-846b-56814df3340b' },
  body: {
    title: 'RoboCop',
    genre: 'action',
    year: 1788,
    movieLength: '02:01:00',
  },
});

describe('Update movies', () => {
  describe('in database', () => {
    it('should call moviesService.updateMovie once', async () => {
      const res = {
        status: jest.fn(() => ({ json: jest.fn(() => ({ movie: 'movie' })) })),
      };
      const req = useReq();
      const update = jest.spyOn(moviesService, 'updateMovie');
      await moviesControllers.updateMovie(req, res);
      expect(update).toHaveBeenCalledTimes(1);
    });
    it('should return added movie', async () => {
      const movie = addMovie();
      const res = {
        status: jest.fn(() => ({ json: jest.fn(() => ({ movie: movie })) })),
      };
      const req = useReq();
      jest.spyOn(moviesService, 'updateMovie');
      const result = await moviesControllers.updateMovie(req, res);
      expect(result.movie[0]).toEqual({
        id: 5,
        title: 'movie5',
        genre: 'drama',
      });
    });
    it('should throw error if no movie added', async () => {
      let err = jest
        .spyOn(moviesService, 'updateMovie')
        .mockImplementation(() => {
          throw new Error();
        });
      const res = {
        status: jest.fn(() => ({ json: jest.fn(() => ({ error: err })) })),
      };
      const req = useReq();
      const result = await moviesControllers.updateMovie(req, res);
      expect(result.error).toThrowError();
    });
  });
});
