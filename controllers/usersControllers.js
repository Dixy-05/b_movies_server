const usersService = require('../service/usersService');
const Joi = require('joi');

class UsersControllers {
  async getUsers(req, res) {
    const users = await usersService.getUsers();
    try {
      res.status(200).send(users);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async getUser(req, res) {
    const schema = Joi.string().email();
    const { error, value } = schema.validate(req.params.email);
    if (error) {
      return res.json({
        error: error.details[0].message,
      });
    }

    try {
      const user = await usersService.getUser(req.params.email);
      res.status(200).json({ user: user });
    } catch (err) {
      console.log(err);
      res.status(400).send({ err: err });
    }
  }
  async updateUser(req, res) {
    if (req.params.id) {
      const schema = Joi.string().guid({ version: 'uuidv4' });
      const { error } = schema.validate(req.params.id);
      if (error) {
        return res.send(error.details[0].message);
      }
    }
    if (req.body) {
      const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string()
          .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
          .required(),
      });

      const { error } = schema.validate(req.body);
      if (error) {
        console.log(error);
        return res.send(error.details[0].message);
      }
    }
    try {
      const updatedUser = await usersService.updateUser(
        req.body,
        req.params.id
      );
      res.status(200).send(updatedUser);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async deleteUser(req, res) {
    const schema = Joi.string().email();
    const emailValidation = schema.validate(req.params.email);
    try {
      if (emailValidation.error) {
        throw emailValidation.error.details[0].message;
      }
      console.log('validation:', emailValidation.value);
      const deletedUser = await usersService.deleteUser(emailValidation.value);
      res.status(200).json({ deletedUser: deletedUser });
    } catch (error) {
      console.log('the error:', error);
      return res.status(500).send({ error: error });
    }
  }
}

module.exports = new UsersControllers();
