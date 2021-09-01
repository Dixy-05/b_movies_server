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

  async addUser(reqBody) {
    const { userName, userEmail, userPassword } = reqBody;
    const [addedUser] = await dbDevelopment('users')
      .insert({
        user_name: userName,
        user_email: userEmail,
        user_password: userPassword,
      })
      .returning('*');
    // .returning(['id', 'first_name', 'last_name', 'user_email', 'user_phone']); // to return specific columns
    return addedUser;
  }
  async updateUser(reqBody, reqParams) {
    //can update 1 or more columns at a time//
    const { userName, userEmail, userPassword } = reqBody;
    const updatedUser = await dbDevelopment('users')
      .where({ id: reqParams })
      .update({
        user_name: userName,
        user_email: userEmail,
        user_password: userPassword,
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
