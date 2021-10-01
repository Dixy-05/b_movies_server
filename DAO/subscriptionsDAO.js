const { dbProduction, dbDevelopment } = require('../DB/db');
const db = dbProduction;
class subscriptionsDAO {
  async getSubscriptions() {
    const subscriptions = await db.select('*').from('subscriptions');
    return subscriptions;
  }
  async getSubscription(reqParams) {
    const subscription = await db
      .select('*')
      .from('subscriptions')
      .where('type', reqParams);
    return subscription;
  }
  async addSubscription(reqBody) {
    const { type, detail, months, price } = reqBody;
    const [addedSubscription] = await db('subscriptions')
      .insert({
        type: type,
        detail: detail,
        months: months,
        price: price,
      })
      .returning('*');
    return addedSubscription;
  }
  async updateSubscription(reqBody, reqParams) {
    const { type, detail, movies_monthly, price } = reqBody;
    const [updatedSubscription] = await db('subscriptions')
      .where('id', reqParams)
      .update({
        type: type,
        detail: detail,
        months: months,
        price: price,
      })
      .returning('*'); // returns all the columns
    return updatedSubscription;
  }
  async deleteSubscription(reqParams) {
    const [deletedSubscription] = await db('subscriptions')
      .where('id', reqParams)
      .del()
      .returning('*');
    return deletedSubscription;
  }
}
module.exports = new subscriptionsDAO();
