const { dbProduction, dbDevelopment } = require('../DB/db');
const db = dbProduction;

class UsersDAO {
  async getUsers() {
    const users = await db.select('*').from('users');
    return users;
  }
  async getUser(reqParams) {
    const user = await db.select('*').from('users').where('email', reqParams);
    return user;
  }

  async createUser(reqBody) {
    const { email, password } = reqBody;
    const [newUser] = await db('users')
      .insert({
        email: email,
        password: password,
      })
      .returning('*');
    return newUser;
  }
  async deleteUser(reqParams) {
    const [deletedUser] = await db('users')
      .where('email', reqParams)
      .del()
      .returning('*');
    return deletedUser;
  }
}

module.exports = new UsersDAO();
