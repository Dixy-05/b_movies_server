const { dbProduction } = require('../DB/db');

class UsersDAO {
  async getUsers() {
    const users = await dbProduction.select('*').from('users');
    return users;
  }
}

module.exports = new UsersDAO();
