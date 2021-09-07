const usersService = require('../service/usersService');
const Joi = require('joi');

class UsersControllers {
  dateTesting(req, res) {
    try {
      return res.status(200).send({ body: req.body });
    } catch (err) {
      console.log(err);
    }
  }

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
    const schema = Joi.string().guid({ version: 'uuidv4' });
    const { error, value } = schema.validate(req.params.id);
    if (error) {
      return res.send(`The given id "${req.params.id} is not valid`);
    }

    try {
      const user = await usersService.getUser(req.params.id);
      res.status(200).send(user);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
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
    if (req.params.email) {
      const schema = Joi.string().email();
      const { error } = schema.validate(req.params.email);
      if (error) {
        return res.send({ error: error.details[0].message });
      }
    }
    try {
      const deletedUser = await usersService.deleteUser(req.params);
      res.status(200).json({ deletedUser: deletedUser });
    } catch (err) {
      console.log(err);
      res.status(400).send({ err: err });
    }
  }
}

module.exports = new UsersControllers();
