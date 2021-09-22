const { dbProduction, dbDevelopment } = require('../DB/db');

class moviesDAO {
  async getMovies() {
    const movies = await dbDevelopment.select('*').from('movies');
    return movies;
  }
  async getMovie(reqParams) {
    const movie = await dbDevelopment
      .select('*')
      .from('movies')
      .where('title', reqParams);
    return movie;
  }
  async addMovie(reqBody) {
    const { title, genre, year, movieLength } = reqBody;
    const [addedMovie] = await dbDevelopment('movies')
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

    const [updatedMovie] = await dbDevelopment('movies')
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
    const [deletedMovie] = await dbDevelopment('movies')
      .where('id', reqParams)
      .del()
      .returning('*');
    return deletedMovie;
  }
}
module.exports = new moviesDAO();
