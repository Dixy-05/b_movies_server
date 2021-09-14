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
      // throw error.details[0].message;
    }
    // user_id: user.id
    try {
      const token = await authService.registerUser(req.body);
      res.status(200).json({ token: token });
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
      const token = await authService.loginUser(req.body);
      console.log('token:', token);
      // res.cookie('jwt', token, { httpOnly: false, maxAge: 60 * 60 * 1000 });
      res.status(200).json({ token: token });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  }
}
module.exports = new authControllers();
