const usersDAO = require('../DAO/usersDAO');

class UsersService {
  async getUsers() {
    const users = await usersDAO.getUsers();
    return users;
  }
  async getUser(reqParams) {
    const user = await usersDAO.getUser(reqParams);
    console.log('user from userservice:', user);
    if (user.length === 0) {
      throw `The user with the given email "${reqParams}" does not exist`;
    }
    return user;
  }
  async createUser(reqBody) {
    const newUser = await usersDAO.createUser(reqBody);
    if (newUser.length === 0) {
      throw `The user with the given id ${reqParams.id} does not exist`;
    }
    return newUser;
  }
  async deleteUser(reqParams) {
    const deletedUser = await usersDAO.deleteUser(reqParams);
    if (!deletedUser) {
      throw `The user with the given email ${reqParams} does not exist`;
    }
    return deletedUser;
  }
}

module.exports = new UsersService();
