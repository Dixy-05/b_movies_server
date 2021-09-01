const authDAO = require('../DAO/authDAO');
const bcrypt = require('bcrypt');

class authService {
  async encryptPassword(password) {
    return new Promise((resolve, reject) => {
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          if (err) {
            return reject(err);
          }
          resolve(hash);
        });
      });
    });
  }

  async registerUser(reqBody) {
    const encryptedPassword = await this.encryptPassword(reqBody.password);
    const addedUser = await authDAO.registerUser({
      email: reqBody.email,
      password: encryptedPassword,
    });
    return addedUser;
  }

  async comparePassword(password, hash) {
    return new Promise((resolve, reject) => {
      // Load hash from your password DB.
      bcrypt.compare(password, hash, function (err, result) {
        if (err) {
          return reject(err);
        }
        resolve(result);
        // result == true
      });
    });
  }

  async loginUser(reqBody) {
    const user = await authDAO.loginUser(reqBody);
    console.log('user:', user);
    const isValid = await this.comparePassword(reqBody.password, user.password);
    if (isValid) {
      return true;
    }
    return false;
  }
}
module.exports = new authService();
