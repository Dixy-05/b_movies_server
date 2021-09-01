const Joi = require('joi');
const moviesRequestsService = require('../service/moviesRequestsService');

class moviesRequestsControllers {
  async getMoviesRequests(req, res) {
    try {
      const orders = await moviesRequestsService.getMoviesRequests();
      res.status(200).send(orders);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async getMovieRequest(req, res) {
    if (req.params.id) {
      const schema = Joi.number().integer();
      const { error } = schema.validate(req.params.id);
      if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
      }
    }
    try {
      const order = await moviesRequestsService.getMovieRequest(req.params.id);
      res.status(200).send(order);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async addMovieRequest(req, res) {
    if (req.body) {
      const schema = Joi.object({
        userId: Joi.string().guid({ version: 'uuidv4' }).required(),
        userSubscriptionId: Joi.string().guid({ version: 'uuidv4' }).required(),
        movieId: Joi.number().integer().required(),
        monthId: Joi.number().integer().required(),
      });
      const { error } = schema.validate(req.body);
      if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
      }
    }
    try {
      const order = await moviesRequestsService.addMovieRequest(req.body);
      res.status(200).send(order);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async updateMovieRequest(req, res) {
    if (req.params.id) {
      const schema = Joi.number().integer();
      const { error } = schema.validate(req.params.id);
      if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
      }
    }
    if (req.body) {
      const schema = Joi.object({
        userId: Joi.string().guid({ version: 'uuidv4' }).required(),
        userSubscriptionId: Joi.string().guid({ version: 'uuidv4' }).required(),
        movieId: Joi.number().integer().required(),
        monthId: Joi.number().integer().required(),
      });
      const { error } = schema.validate(req.body);
      if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
      }
    }
    try {
      const order = await moviesRequestsService.updateMovieRequest(
        req.params.id,
        req.body
      );
      res.status(200).send(order);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async deleteMovieRequest(req, res) {
    if (req.params.id) {
      const schema = Joi.number().integer();
      const { error } = schema.validate(req.params.id);
      if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
      }
    }
    try {
      const order = await moviesRequestsService.deleteMovieRequest(
        req.params.id
      );
      res.status(200).send(order);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}

module.exports = new moviesRequestsControllers();
