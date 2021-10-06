const moviesService = require('../service/moviesService');
const Joi = require('joi');
class moviesControllers {
  async getMovies(req, res) {
    try {
      const movies = await moviesService.getMovies();
      res.status(200).json({ movies: movies });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err });
    }
  }
  async getMovie(req, res) {
    const schema = Joi.string();
    const paramValid = schema.validate(req.params.title);
    if (paramValid.error) {
      console.log(paramValid.error);
      res.status(400).json({ error: paramValid.error.details[0].message });
    }
    try {
      const [movie] = await moviesService.getMovie(paramValid.value);
      res.status(200).json({ movie: movie });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err });
    }
  }
  async addMovie(req, res) {
    const schema = Joi.object({
      title: Joi.string(),
      genre: Joi.string(),
      year: Joi.number().integer(),
      movieLength: Joi.string().regex(
        /^(?:([01]?\d|2[0-3]):([0-5]?\d):)?([0-5]?\d)$/
      ),
    });
    const bodyValid = schema.validate(req.body);
    if (bodyValid.error) {
      console.log(bodyValid.error);
      return res
        .status(400)
        .json({ error: bodyValid.error.details[0].message });
    }
    try {
      const addedMovie = await moviesService.addMovie(bodyValid.value);
      res.status(200).json({ movie: addedMovie });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err });
    }
  }
  async updateMovie(req, res) {
    const paramSchema = Joi.string().guid({ version: 'uuidv4' });
    const paramValid = paramSchema.validate(req.params.id);
    if (paramValid.error) {
      console.log(paramValid.error);
      res.status(400).json({ error: paramValid.error.details[0].message });
    }
    const bodySchema = Joi.object({
      title: Joi.string(),
      genre: Joi.string(),
      year: Joi.number().integer(),
      movieLength: Joi.string().regex(
        /^(?:([01]?\d|2[0-3]):([0-5]?\d):)?([0-5]?\d)$/
      ),
    });
    const bodyValid = bodySchema.validate(req.body);
    if (bodyValid.error) {
      console.log(bodyValid.error);
      res.status(400).json({ error: bodyValid.error.details[0].message });
    }
    try {
      const updatedMovie = await moviesService.updateMovie(
        bodyValid.value,
        paramValid.value
      );
      return res.status(200).json({ movie: updatedMovie });
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  }
  async deleteMovie(req, res) {
    const schema = Joi.string().guid({ version: 'uuidv4' });
    const paramValid = schema.validate(req.params.id);
    if (paramValid.error) {
      console.log(paramValid.error);
      res.status(400).json({ error: paramValid.error.details[0].message });
    }
    try {
      const deletedMovie = await moviesService.deleteMovie(paramValid.value);
      res.status(200).json({ movie: deletedMovie });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err });
    }
  }
}
module.exports = new moviesControllers();
