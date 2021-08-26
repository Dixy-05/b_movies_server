const { dbProduction } = require('../DB/db');

class UsersDAO {
  async getUsers() {
    const users = await dbProduction.select('*').from('users');
    return users;
  }
  async getUser(reqParams) {
    const user = await dbProduction
      .select('*')
      .from('users')
      .where('id', reqParams);
    return user;
  }
  async addUser(reqBody) {
    const { firstName, lastName, email, phone } = reqBody;
    const [addedUser] = await dbProduction('users')
      .insert({
        first_name: firstName,
        last_name: lastName,
        user_email: email,
        user_phone: phone,
      })
      .returning('id', 'firs_name', 'last_name', 'user_email', 'user_phone');
    return addedUser;
  }
  async updateUser() {
    //     const updatedUser = await usersDAO.updateUser();
    //     return updatedUser;
  }
  async deleteUser() {
    //     const deletedUser = await usersDAO.deleteUser();
    //     return deletedUser;
  }
}

module.exports = new UsersDAO();
