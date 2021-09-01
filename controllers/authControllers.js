const authService = require('../service/authService');
const Joi = require('joi');

class authControllers {
  async registerUser(req, res) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
        .required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ err_message: error.details[0].message });
    }
    try {
      const user = await authService.registerUser(req.body);
      res.status(200).json({ added_User: user });
    } catch (err) {
      console.log(err);
      res.status(400).json({ err: err });
    }
  }

  async loginUser(req, res) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
        .required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ err_message: error.details[0].message });
    }
    try {
      const token = await authService.loginUser(req.body);
      res.status(200).json({ token: token });
    } catch (err) {
      res.status(400).json({ Err_message: err });
    }
  }
}
module.exports = new authControllers();
