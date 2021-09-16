const { dbDevelopment } = require('../DB/db');

class auhtDAO {
  async registerUser(reqBody) {
    const { email, password } = reqBody;
    const [addedUser] = await dbDevelopment('admin_users')
      .insert({
        email: email,
        password: password,
      })
      .returning('*');
    return addedUser;
  }
  async getUser(reqBody) {
    const [user] = await dbDevelopment
      .select('*')
      .from('admin_users')
      .where('email', reqBody.email);
    return user;
  }
}
module.exports = new auhtDAO();
