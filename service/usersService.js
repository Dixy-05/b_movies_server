const usersDAO = require('../DAO/usersDAO');

class UsersService {
  async getUsers() {
    const users = await usersDAO.getUsers();
    return users;
  }
  async getUser(reqParams) {
    const user = await usersDAO.getUser(reqParams);
    if (user.length === 0) {
      throw `The user with the given id "${reqParams}" does not exist`;
    }
    return user;
  }
  async updateUser(reqBody, reqParams) {
    const updatedUser = await usersDAO.updateUser(reqBody, reqParams);
    if (updatedUser.length === 0) {
      throw `The user with the given id ${reqParams.id} does not exist`;
    }
    return updatedUser;
  }
  async deleteUser(reqParams) {
    const deletedUser = await usersDAO.deleteUser(reqParams);
    if (!deletedUser) {
      throw `The user with the given email ${reqParams.email} does not exist`;
    }
    return deletedUser;
  }
}

module.exports = new UsersService();
