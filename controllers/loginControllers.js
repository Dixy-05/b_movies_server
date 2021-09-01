const loginService = require('../service/loginService');

class loginControllers {
  async loginUser(req, res) {
    try {
      const token = await loginService.loginUser(req.body);
      res.status(200).json({ token: token });
    } catch (err) {
      res.status(400).json({ Err_message: err });
    }
  }
}

module.exports = new loginControllers();
