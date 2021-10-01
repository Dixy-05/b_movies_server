const { dbProduction, dbDevelopment } = require('../DB/db');
const db = dbProduction;
class moviesDAO {
  async getMovies() {
    const movies = await db.select('*').from('movies');
    return movies;
  }
  async getMovie(reqParams) {
    const movie = await db.select('*').from('movies').where('title', reqParams);
    return movie;
  }
  async addMovie(reqBody) {
    const { title, genre, year, movieLength } = reqBody;
    const [addedMovie] = await db('movies')
      .insert({
        title: title,
        genre: genre,
        year: year,
        movie_length: movieLength,
      })
      .returning('*');
    return addedMovie;
  }
  async updateMovie(reqBody, reqParams) {
    const { title, genre, year, movieLength } = reqBody;

    const [updatedMovie] = await db('movies')
      .where('id', reqParams)
      .update({
        title: title,
        genre: genre,
        year: year,
        movie_length: movieLength,
      })
      .returning('*');
    return updatedMovie;
  }
  async deleteMovie(reqParams) {
    const [deletedMovie] = await db('movies')
      .where('id', reqParams)
      .del()
      .returning('*');
    return deletedMovie;
  }
}
module.exports = new moviesDAO();
