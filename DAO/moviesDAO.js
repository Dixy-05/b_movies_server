const { dbProduction } = require('../DB/db');

class moviesDAO {
  async getMovies() {
    const movies = await dbProduction.select('*').from('movies');
    return movies;
  }
  async getMovie(reqParams) {
    const movies = await dbProduction
      .select('*')
      .from('movies')
      .where('id', reqParams);
    return movies;
  }
  async addMovie(reqBody) {
    const { title, genre, year, movieLength } = reqBody;
    const addedMovie = await dbProduction('movies')
      .insert({
        title: title,
        genre: genre,
        year: year,
        movie_length: movieLength,
      })
      .returning(['id', 'title', 'genre', 'year', 'movie_length']);
    return addedMovie;
  }
  async updateMovie(reqBody, reqParams) {
    const { title, genre, year, movieLength } = reqBody;
    const update = [];
    update.push('id');
    title && update.push('title');
    genre && update.push('genre');
    year && update.push('year');
    movieLength && update.push('movie_length');

    const updatedMovie = await dbProduction('movies')
      .where('id', reqParams)
      .update({
        title: title,
        genre: genre,
        year: year,
        movie_lenth: movieLength,
      })
      .returning(update);
    return updatedMovie;
  }
  async deleteMovie(reqParams) {
    const deletedMovie = await dbProduction('movies')
      .where('id', reqParams)
      .del()
      .returning(['id', 'title']);
    return deletedMovie;
  }
}
module.exports = new moviesDAO();
