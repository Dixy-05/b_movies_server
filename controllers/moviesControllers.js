const moviesService = require('../service/moviesService');
const Joi = require('joi');
class moviesControllers {
  async getMovies(req, res) {
    try {
      const movies = await moviesService.getMovies();
      res.status(200).send(movies);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async getMovie(req, res) {
    if (req.params.id) {
      const schema = Joi.number.integer();
      const { error } = schema.validate(req.params.id);
      if (error) {
        console.log(error);
        res.status(400).send(error.details[0].message);
      }
    }
    try {
      const movies = await moviesService.getMovie();
      res.status(200).send(movies);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async addMovie(req, res) {
    if (req.body) {
      const schema = Joi.object({
        title: Joi.string(),
        genre: Joi.string(),
        year: Joi.number().integer(),
        movieLength: Joi.string().regex(
          /^(?:([01]?\d|2[0-3]):([0-5]?\d):)?([0-5]?\d)$/
        ),
      });
      const { error } = schema.validate(req.body);
      if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
      }
    }

    try {
      const addedMovie = await moviesService.addMovie(req.body);
      res.status(200).send(addedMovie);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async updateMovie(req, res) {
    if (req.params.id) {
      const schema = Joi.number().integer();
      const { error } = schema.validate(req.params.id);
      if (error) {
        console.log(error);
        res.status(400).send(error.details[0].message);
      }
    }
    if (req.body) {
      const schema = Joi.object({
        title: Joi.string(),
        genre: Joi.string(),
        year: Joi.number().integer(),
        movieLength: Joi.string().regex(
          /^(?:([01]?\d|2[0-3]):([0-5]?\d):)?([0-5]?\d)$/
        ),
      });
      const { error } = schema.validate(req.body);
      if (error) {
        console.log(error);
        res.status(400).send(error.details[0].message);
      }
    }
    try {
      const updatedMovie = await moviesService.updateMovie(
        req.body,
        req.params.id
      );
      res.status(200).send(updatedMovie);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async deleteMovie(req, res) {
    if (req.params.id) {
      const schema = Joi.number().integer();
      const { error } = schema.validate(req.params.id);
      if (error) {
        console.log(error);
        res.status(400).send(error.details[0].message);
      }
    }
    try {
      const deletedMovie = await moviesService.deleteMovie(req.params.id);
      res.status(200).send(deletedMovie);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
module.exports = new moviesControllers();
