const moviesDAO = require('../DAO/moviesDAO');
class moviesService {
  async getMovies() {
    const movies = await moviesDAO.getMovies();
    return movies;
  }
  async getMovie(reqParams) {
    const movie = await moviesDAO.getMovie(reqParams);
    console.log('movie length:', movie);
    if (movie.length === 0) {
      throw `The movie with the given title "${reqParams}" does not exist.`;
    }
    return movie;
  }
  async addMovie(reqBody) {
    const addedMovie = moviesDAO.addMovie(reqBody);
    return addedMovie;
  }
  async updateMovie(reqBody, reqParams) {
    const updatedMovie = moviesDAO.updateMovie(reqBody, reqParams);
    if (updatedMovie.length === 0) {
      throw `The movie with the given id "${reqParams}" does not exist.`;
    }
    return updatedMovie;
  }
  async deleteMovie(reqParams) {
    const deletedMovie = moviesDAO.deleteMovie(reqParams);
    if (deletedMovie.length === 0) {
      throw `The movie with the given id "${reqParams} does not exist.`;
    }
    return deletedMovie;
  }
}
module.exports = new moviesService();
