const { dbDevelopment } = require('../DB/db');

class auhtDAO {
  async registerUser(reqBody) {
    const { email, password } = reqBody;
    const [addedUser] = await dbDevelopment('users')
      .insert({
        email: email,
        password: password,
      })
      .returning('*');
    return addedUser;
  }
  async loginUser(reqBody) {
    const [user] = await dbDevelopment
      .select('*')
      .from('users')
      .where('email', reqBody.email);
    return user;
  }
}
module.exports = new auhtDAO();
