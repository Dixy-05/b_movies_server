const usersDAO = require('../DAO/usersDAO');

class UsersService {
  async getUsers() {
    const users = await usersDAO.getUsers();
    return users;
  }
  async getUser(reqParams) {
    const user = await usersDAO.getUser(reqParams);
    if (!user) {
      throw `The user with the given id ${reqParams} does not exist`;
    }
    return user;
  }
  async addUser(reqBody) {
    const addedUser = await usersDAO.addUser(reqBody);
    return addedUser;
  }
  async updateUser() {
    const updatedUser = await usersDAO.updateUser();
    return updatedUser;
  }
  async deleteUser() {
    const deletedUser = await usersDAO.deleteUser();
    return deletedUser;
  }
}

module.exports = new UsersService();
