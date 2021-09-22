const authDAO = require('../DAO/authDAO');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
  async generateAccesToken(email) {
    return new Promise((resolve, reject) => {
      jwt.sign(
        { email: email },
        process.env.TOKEN_SECRET,
        {
          expiresIn: '1h',
        },
        (err, token) => {
          if (err) {
            return reject(err);
          } else {
            resolve(token);
          }
        }
      );
    });
  }
  async registerUser(reqBody) {
    const encryptedPassword = await this.encryptPassword(reqBody.password);
    if (encryptedPassword) {
      const user = await authDAO.registerUser({
        email: reqBody.email,
        password: encryptedPassword,
      });
      if (user === 0) {
        throw 'Registry Unsuccessful';
      }
      const accessToken = await this.generateAccesToken(reqBody.email);
      return { accessToken, user };
    }
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
    const user = await authDAO.getUser(reqBody);
    if (!user) {
      console.log('user does not exist');
      throw 'The given email does Not exist';
    } else {
      const isValid = await this.comparePassword(
        reqBody.password,
        user.password
      );
      if (isValid) {
        const accessToken = await this.generateAccesToken(reqBody.email);
        return { accessToken, user };
      } else {
        console.log('Incorrect password');
        throw 'Incorrect password';
      }
    }
  }
}
module.exports = new authService();
