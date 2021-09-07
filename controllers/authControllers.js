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
      const { token, user } = await authService.registerUser(req.body);

      // res.cookie('jwt', token);
      // res.status(200).send({ message: "you've got the cookies" });
      // res.header('Access-Control-Allow-Credentials', true);
      res.cookie(
        'jwt',
        token
        //  {
        // httpOnly: true,
        // maxAge: 60 * 60 * 1000,
        // withCredentials: true,
        // }
      );
      res.status(200).json({ user_id: user.id });
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
      console.log('token:', token);
      res.cookie('jwt', token, { httpOnly: false, maxAge: 60 * 60 * 1000 });
      res
        .status(200)
        .json({ credentials: { token: token, email: req.body.email } });
    } catch (err) {
      res.status(400).json({ Err_message: err });
    }
  }
}
module.exports = new authControllers();
