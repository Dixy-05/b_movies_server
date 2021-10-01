const subscriptionsService = require('../service/subscriptionsService');
const Joi = require('joi');
class subscriptionsControllers {
  async getSubscriptions(req, res) {
    try {
      const subscriptions = await subscriptionsService.getSubscriptions();
      res.status(200).json({ subscriptions: subscriptions });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err });
    }
  }
  async getSubscription(req, res) {
    const schema = Joi.string();
    const paramValid = schema.validate(req.params.type);
    if (paramValid.error) {
      console.log(paramValid.error);
      res.status(400).json({ error: paramValid.error.details[0].message });
    }

    try {
      const [subscription] = await subscriptionsService.getSubscription(
        paramValid.value
      );
      res.status(200).json({ subscription: subscription });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err });
    }
  }
  async addSubscription(req, res) {
    const schema = Joi.object({
      type: Joi.string().required(),
      detail: Joi.string().required(),
      months: Joi.number().integer().required(),
      price: Joi.number().precision(2).required(),
    });
    const bodyValid = schema.validate(req.body);
    if (bodyValid.error) {
      console.log(bodyValid.error);
      return res
        .status(400)
        .json({ error: bodyValid.error.details[0].message });
    }
    try {
      const addedSubscription = await subscriptionsService.addSubscription(
        bodyValid.value
      );
      res.status(200).json({ subscription: addedSubscription });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err });
    }
  }
  async updateSubscription(req, res) {
    const paramSchema = Joi.string().guid({ version: 'uuidv4' });
    const paramValid = paramSchema.validate(req.params.id);
    if (paramValid.error) {
      console.log(paramValid.error);
      res.status(400).json({ error: paramValid.error.details[0].message });
    }

    const bodySchema = Joi.object({
      type: Joi.string(),
      detail: Joi.string(),
      months: Joi.number().integer(),
      price: Joi.number().precision(2),
    });
    const bodyValid = bodySchema.validate(req.body);
    if (bodyValid.error) {
      return res
        .status(400)
        .json({ error: bodyValid.error.details[0].message });
    }

    try {
      const updatedSubscription = await subscriptionsService.updateSubscription(
        bodyValid.value,
        paramValid.value
      );
      res.status(200).json({ subscription: updatedSubscription });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err });
    }
  }
  async deleteSubscription(req, res) {
    const schema = Joi.string().guid({ version: 'uuidv4' });
    const paramValid = schema.validate(req.params.id);
    if (paramValid.error) {
      return res.send({ error: paramValid.error.details[0].message });
    }
    try {
      const deletedSubscription = await subscriptionsService.deleteSubscription(
        paramValid.value
      );
      res.status(200).json({ subscription: deletedSubscription });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err });
    }
  }
}

module.exports = new subscriptionsControllers();
