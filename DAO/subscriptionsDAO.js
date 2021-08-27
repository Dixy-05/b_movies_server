const { dbProduction } = require('../DB/db');
class subscriptionsDAO {
  async getSubscriptions() {
    const subscriptions = await dbProduction.select('*').from('subscriptions');
    return subscriptions;
  }
  async getSubscription(reqParams) {
    const subscription = await dbProduction
      .select('*')
      .from('subscriptions')
      .where('id', reqParams);
    return subscription;
  }
  async addSubscription(reqBody) {
    const { type, detail, movies_monthly, price } = reqBody;
    const addedSubscription = await dbProduction('subscriptions')
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
    const updatedMovie = await dbProduction('subscriptions')
      .where('id', reqParams)
      .update({
        type: type,
        detail: detail,
        movies_monthly: movies_monthly,
        price: price,
      })
      .returning('*'); // returns all the columns
    return updatedMovie;
  }
  async deleteSubscription(reqParams) {
    const deletedSubscription = await dbProduction('subscriptions')
      .where('id', reqParams)
      .del()
      .returning('*');
    return deletedSubscription;
  }
}
module.exports = new subscriptionsDAO();
