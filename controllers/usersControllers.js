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
    const schema = Joi.string().guid('uuidv4');
    const { error, value } = schema.validate(req.params.id);
    if (error) {
      return res.send(`The given id "${req.params.id} is not valid`);
    }

    try {
      const user = await usersService.getUser(value);
      res.status(200).send(user);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async addUser(req, res) {
    const schema = Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      user_email: Joi.string().email().required(),
      user_phone: Joi.number().integer().required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    try {
      const addedUser = await usersService.addUser(value);
      res.status(200).send(addedUser);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async updateUser(req, res) {
    const schema = Joi.string().guid('uuidv4');
    const { error, value } = schema.validate(req.params.id);
    if (error) {
      return res.send(`The given id "${req.params.id} is not valid`);
    }
    const updatedUser = await usersService.updateUser();
    try {
      res.status(200).send(updatedUser);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async deleteUser(req, res) {
    const schema = Joi.string().guid('uuidv4');
    const { error, value } = schema.validate(req.params.id);
    if (error) {
      return res.send(`The given id "${req.params.id} is not valid`);
    }
    const deletedUser = await usersService.deleteUser();
    try {
      res.status(200).send(deletedUser);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}

module.exports = new UsersControllers();
