const authService = require('../service/authService');
const Joi = require('joi');

class authControllers {
  async registerUser(req, res) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .required()
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
        .required(),
    });

    const bodyValidation = schema.validate(req.body);
    if (bodyValidation.error) {
      return res
        .status(400)
        .json({ error: bodyValidation.error.details[0].message });
    }
    try {
      const { accessToken, user } = await authService.registerUser(req.body);
      res.status(200).json({ token: accessToken, account: user.email });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err });
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
      return res.status(400).json({ error: error.details[0].message });
    }
    try {
      const { accessToken, user } = await authService.loginUser(req.body);
      res.status(200).json({ token: accessToken, account: user.email });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  }
}
module.exports = new authControllers();
