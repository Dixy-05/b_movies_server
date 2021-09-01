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
    const { userEmail, userPassword } = reqBody;
    const updatedUser = await dbDevelopment('users')
      .where({ id: reqParams })
      .update({
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
  async addUser(reqBody) {
    const { userEmail, userPassword } = reqBody;
    const [addedUser] = await dbDevelopment('users')
      .insert({
        user_email: userEmail,
        user_password: userPassword,
      })
      .returning('*');
    // .returning(['id', 'first_name', 'last_name', 'user_email', 'user_phone']); // to return specific columns
    return addedUser;
  }
  async loginUser(reqBody) {
    const { userEmail, userPassword } = reqBody;
    const [token] = await dbDevelopment('login')
      .insert({
        user_Email: userEmail,
        user_password: userPassword,
      })
      .returning('user_email', 'token');
    return token;
  }
}

module.exports = new UsersDAO();
