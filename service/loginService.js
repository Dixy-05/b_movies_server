const loginDAO = require('../DAO/loginDAO');

class loginService {
  async loginUser(reqBody) {
    const token = await loginDAO.loginUser(reqBody);
    return token;
  }
}

module.exports = new loginService();
