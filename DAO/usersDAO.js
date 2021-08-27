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
    const { firstName, lastName, userEmail, userPhone } = reqBody;
    const [addedUser] = await dbProduction('users')
      .insert({
        first_name: firstName,
        last_name: lastName,
        user_email: userEmail,
        user_phone: userPhone,
      })
      .returning(['id', 'first_name', 'last_name', 'user_email', 'user_phone']);
    return addedUser;
  }
  async updateUser(reqBody, reqParams) {
    //can update 1 or more columns at a time//
    const { firstName, lastName, userEmail, userPhone } = reqBody;
    const update = [];
    update.push('id');
    firstName ? update.push('first_name') : null;
    lastName ? update.push('last_name') : null;
    userEmail ? update.push('user_email') : null;
    userPhone ? update.push('user_phone') : null;

    const updatedUser = await dbProduction('users')
      .where({ id: reqParams })
      .update({
        first_name: firstName,
        last_name: lastName,
        user_email: userEmail,
        user_phone: userPhone,
      })
      .returning(update);
    return updatedUser;
  }
  async deleteUser(reqParams) {
    deletedUser = await dbProduction('users')
      .where('id', reqParams)
      .del()
      .returning(['id', 'user_email']);
    return deletedUser;
  }
}

module.exports = new UsersDAO();
