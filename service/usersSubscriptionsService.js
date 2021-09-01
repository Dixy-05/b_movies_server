const usersSubscriptionsDAO = require('../DAO/usersSubscriptionsDAO');

class usersSubscriptionsService {
  async getUsersSubscriptions() {
    console.log('working in service');
    const us = await usersSubscriptionsDAO.getUsersSubscriptions();
    return us;
  }
  async getUserSubscription(reqParams) {
    const us = await usersSubscriptionsDAO.getUserSubscription(reqParams);
    return us;
  }

  async addUserSubscription(reqBody) {
    const us = await usersSubscriptionsDAO.addUserSubscription(reqBody);
    return us;
  }
  async updateUserSubscription(reqParams, reqBody) {
    const us = await usersSubscriptionsDAO.updateUserSubscription(
      reqParams,
      reqBody
    );
    return us;
  }
  async deleteUserSubscription(reqParams) {
    const us = await usersSubscriptionsDAO.deleteUserSubscription(reqParams);
    return us;
  }
}
module.exports = new usersSubscriptionsService();
