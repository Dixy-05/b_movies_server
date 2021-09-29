const usersService = require('../service/usersService');
const Joi = require('joi');

class UsersControllers {
  async getUsers(req, res) {
    const users = await usersService.getUsers();
    try {
      res.status(200).json({ users: users });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err });
    }
  }
  async getUser(req, res) {
    const schema = Joi.string().email();
    const paramValid = schema.validate(req.params.email);
    if (paramValid.error) {
      return res.json({
        error: paramValid.error.details[0].message,
      });
    }
    try {
      const [user] = await usersService.getUser(paramValid.value);
      res.status(200).json({ user: user });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err });
    }
  }
  async createUser(req, res) {
    const bodySchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
        .required(),
    });
    const bodyValid = bodySchema.validate(req.body);
    if (bodyValid.error) {
      console.log(bodyValid.error);
      return res.json({ error: bodyValid.error.details[0].message });
    }
    try {
      const newUser = await usersService.createUser(bodyValid.value);
      res.status(200).json({ user: newUser });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err });
    }
  }
  async deleteUser(req, res) {
    const schema = Joi.string().email();
    const paramValid = schema.validate(req.params.email);
    if (paramValid.error) {
      res.status(400).json({ error: paramValid.error.details[0].message });
    }
    try {
      const deletedUser = await usersService.deleteUser(paramValid.value);
      res.status(200).json({ user: deletedUser });
    } catch (error) {
      console.log('the error:', error);
      return res.status(400).json({ error: error });
    }
  }
}

module.exports = new UsersControllers();
