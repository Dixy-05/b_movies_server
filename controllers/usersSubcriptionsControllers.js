const Joi = require('joi');
const usersSubscriptionsService = require('../service/usersSubscriptionsService');

class usersSubcriptionsControllers {
  async getUsersSubscriptions(req, res) {
    console.log('workig in controllers');
    try {
      const us = await usersSubscriptionsService.getUsersSubscriptions();
      res.status(200).send(us);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
  async getUserSubscription(req, res) {
    if (req.params.id) {
      const schema = Joi.string().guid({ version: 'uuidv4' });
      const { error } = schema.validate(req.params.id);
      if (error) {
        return res.send(`The given id "${req.params.id} is not valid`);
      }
    }

    try {
      const us = await usersSubscriptionsService.getUserSubscription(
        req.params.id
      );
      res.status(200).send(us);
    } catch (err) {
      console.log(err);
      res.status(400).send(error);
    }
  }
  async addUserSubscription(req, res) {
    if (req.body) {
      const schema = Joi.object({
        userId: Joi.string().required(),
        subscriptionId: Joi.string().required(),
        monthStart: Joi.date().required(),
        monthEnd: Joi.date().required(),
      });
      const { error } = schema.validate(req.body);
      if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
      }
    }

    try {
      const us = await usersSubscriptionsService.addUserSubscription(req.body);
      res.status(200).send(us);
    } catch (err) {
      console.log(err);
      res.status(400).send(error);
    }
  }
  async updateUserSubscription(req, res) {
    if (req.params.id) {
      const schema = Joi.string().guid({ version: 'uuidv4' });
      const { error } = schema.validate(req.params.id);
      if (error) {
        return res.send(`The given id "${req.params.id} is not valid`);
      }
    }
    if (req.body) {
      const schema = Joi.object({
        userId: Joi.string().required(),
        subscriptionId: Joi.string().required(),
        monthStart: Joi.date().required(),
        monthEnd: Joi.date().required(),
      });
      const { error } = schema.validate(req.body);
      if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
      }
    }

    try {
      const us = await usersSubscriptionsService.updateUserSubscription(
        req.params.id,
        req.body
      );

      res.status(200).send(us);
    } catch (err) {
      console.log(err);
      res.status(400).send(error);
    }
  }
  async deleteUserSubscription(req, res) {
    if (req.params.id) {
      const schema = Joi.string().guid({ version: 'uuidv4' });
      const { error } = schema.validate(req.params.id);
      if (error) {
        return res.send(`The given id "${req.params.id} is not valid`);
      }
    }
    try {
      const us = await usersSubscriptionsService.deleteUserSubscription(
        req.params.id
      );
      res.status(200).send(us);
    } catch (err) {
      console.log(err);
      res.status(400).send(error);
    }
  }
}
module.exports = new usersSubcriptionsControllers();
