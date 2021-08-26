const usersDAO = require('../DAO/usersDAO');

class UsersService {
  async getUsers() {
    const users = await usersDAO.getUsers();
    return users;
  }
}

module.exports = new UsersService();
