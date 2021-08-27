const subscriptionsService = require('../service/subscriptionsService');
const Joi = require('joi');
class subscriptionsControllers {
  async getSubscriptions(req, res) {
    try {
      const subscriptions = await subscriptionsService.getSubscriptions();
      res.status(200).send(subscriptions);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async getSubscription(req, res) {
    if (req.params.id) {
      const schema = Joi.string().guid({ version: 'uuidv4' });
      const { error } = schema.validate(req.params.id);
      if (error) {
        console.log(err);
        res.status(400).send(error.details[0].message);
      }
    }
    try {
      const subscriptions = await subscriptionsService.getSubscription();
      res.status(200).send(subscriptions);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async addSubscription(req, res) {
    if (req.body) {
      const schema = Joi.object({
        type: Joi.string().required(),
        detail: Joi.string().required(),
        movies_monthly: Joi.number().integer().required(),
        price: Joi.number().precision(2).required(),
      });
      const { error } = schema.validate(req.body);
      if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
      }
    }
    try {
      const addedSubscription = await subscriptionsService.addSubscription(
        req.body
      );
      res.status(200).send(addedSubscription);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async updateSubscription(req, res) {
    if (req.params.id) {
      const schema = Joi.string().guid({ version: 'uuidv4' });
      const { error } = schema.validate(req.params.id);
      if (error) {
        console.log(error);
        res.status(400).send(error.details[0].message);
      }
    }
    if (req.body) {
      const schema = Joi.object({
        type: Joi.string(),
        detail: Joi.string(),
        num_movies_monthly: Joi.number().integer(),
        price: Joi.number().precision(2),
      });
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
    }

    try {
      const updatedSubscription = await subscriptionsService.updateSubscription(
        req.body,
        req.params.id
      );
      res.status(200).send(updatedSubscription);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async deleteSubscription(req, res) {
    if (req.params.id) {
      const schema = Joi.string().guid({ version: 'uuidv4' });
      const { error } = schema.validate(req.params.id);
      if (error) {
        return res.send(error.details[0].message);
      }
    }
    try {
      const deletedSubscription = await subscriptionsService.deleteSubscription(
        req.params.id
      );
      res.status(200).send(deletedSubscription);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}

module.exports = new subscriptionsControllers();
