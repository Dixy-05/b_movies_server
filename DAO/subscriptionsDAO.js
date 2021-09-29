const { dbProduction, dbDevelopment } = require('../DB/db');
class subscriptionsDAO {
  async getSubscriptions() {
    const subscriptions = await dbDevelopment.select('*').from('subscriptions');
    return subscriptions;
  }
  async getSubscription(reqParams) {
    const subscription = await dbDevelopment
      .select('*')
      .from('subscriptions')
      .where('type', reqParams);
    return subscription;
  }
  async addSubscription(reqBody) {
    const { type, detail, movies_monthly, price } = reqBody;
    const [addedSubscription] = await dbDevelopment('subscriptions')
      .insert({
        type: type,
        detail: detail,
        movies_monthly: movies_monthly,
        price: price,
      })
      .returning('*');
    return addedSubscription;
  }
  async updateSubscription(reqBody, reqParams) {
    const { type, detail, movies_monthly, price } = reqBody;
    const [updatedSubscription] = await dbDevelopment('subscriptions')
      .where('id', reqParams)
      .update({
        type: type,
        detail: detail,
        movies_monthly: movies_monthly,
        price: price,
      })
      .returning('*'); // returns all the columns
    return updatedSubscription;
  }
  async deleteSubscription(reqParams) {
    const [deletedSubscription] = await dbDevelopment('subscriptions')
      .where('id', reqParams)
      .del()
      .returning('*');
    return deletedSubscription;
  }
}
module.exports = new subscriptionsDAO();
