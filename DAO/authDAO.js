const { dbProduction, dbDevelopment } = require('../DB/db');
const db = dbProduction;
class auhtDAO {
  async registerUser(reqBody) {
    const { email, password } = reqBody;
    const [addedUser] = await db('admin_users')
      .insert({
        email: email,
        password: password,
      })
      .returning('*');
    console.log('addeduser:', addedUser);
    return addedUser;
  }
  async getUser(reqBody) {
    const [user] = await db
      .select('*')
      .from('admin_users')
      .where('email', reqBody.email);
    return user;
  }
}
module.exports = new auhtDAO();
