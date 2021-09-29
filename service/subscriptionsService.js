const subscriptionsDAO = require('../DAO/subscriptionsDAO');

class subscriptionsService {
  async getSubscriptions() {
    const subscriptions = await subscriptionsDAO.getSubscriptions();
    return subscriptions;
  }
  async getSubscription(reqParams) {
    const subscription = await subscriptionsDAO.getSubscription(reqParams);
    if (subscription.length === 0) {
      throw `The subscription with the given type "${reqParams}" does not exist.`;
    }
    return subscription;
  }
  async addSubscription(reqBody) {
    const addedSubscription = await subscriptionsDAO.addSubscription(reqBody);
    return addedSubscription;
  }
  async updateSubscription(reqBody, reqParams) {
    const updatedSubscription = await subscriptionsDAO.updateSubscription(
      reqBody,
      reqParams
    );
    if (updatedSubscription.length === 0) {
      throw `The subscription with the given id "${reqParams}" does not exist.`;
    }
    return updatedSubscription;
  }
  async deleteSubscription(reqParams) {
    const deletedSubscription = await subscriptionsDAO.deleteSubscription(
      reqParams
    );
    if (deletedSubscription.length === 0) {
      throw `The subscription with the given id "${reqParams} does not exist.`;
    }
    return deletedSubscription;
  }
}

module.exports = new subscriptionsService();
