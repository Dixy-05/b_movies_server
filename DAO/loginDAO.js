const { dbProduction, dbDevelopment } = require('../DB/db');

class loginDAO {
  async loginUser(reqBody) {
    const { userEmail, userPassword } = reqBody;
    const [token] = await dbDevelopment('login')
      .insert({
        user_Email: userEmail,
        user_password: userPassword,
      })
      .returning('user_email', 'token');
    return token;
  }
}

module.exports = new loginDAO();
