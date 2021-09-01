const { dbProduction, dbDevelopment } = require('../DB/db');

class UsersDAO {
  async getUsers() {
    const users = await dbDevelopment.select('*').from('users');
    return users;
  }
  async getUser(reqParams) {
    const user = await dbDevelopment
      .select('*')
      .from('users')
      .where('id', reqParams);
    return user;
  }

  async updateUser(reqBody, reqParams) {
    //can update 1 or more columns at a time//
    const { email, password } = reqBody;
    const updatedUser = await dbDevelopment('users')
      .where({ id: reqParams })
      .update({
        email: email,
        password: password,
      })
      .returning('*');
    return updatedUser;
  }
  async deleteUser(reqParams) {
    deletedUser = await dbDevelopment('users')
      .where('id', reqParams)
      .del()
      .returning('*');
    return deletedUser;
  }
}

module.exports = new UsersDAO();
