const { dbProduction, dbDevelopment } = require('../DB/db');

class UsersDAO {
  async getUsers() {
    const users = await dbDevelopment.select('*').from('users');
    return users;
  }
  async getUser(reqParams) {
    const [user] = await dbDevelopment
      .select('*')
      .from('users')
      .where('email', reqParams);
    return user;
  }

  async createUser(reqBody) {
    const { email, password } = reqBody;
    const [newUser] = await dbDevelopment('users')
      .insert({
        email: email,
        password: password,
      })
      .returning('*');
    return newUser;
  }
  async deleteUser(reqParams) {
    const [deletedUser] = await dbDevelopment('users')
      .where('email', reqParams)
      .del()
      .returning('*');
    return deletedUser;
  }
}

module.exports = new UsersDAO();
