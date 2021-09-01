const { dbProduction, dbDevelopment } = require('../DB/db');

class usersSubcriptionsDAO {
  async getUsersSubscriptions() {
    console.log('working in DAO');
    const us = await dbDevelopment.select('*').from('users_subscriptions');
    return us;
  }
  async getUserSubscription(reqParams) {
    const [us] = await dbDevelopment
      .select('*')
      .from('users_subscriptions')
      .where('id', reqParams);
    return us;
  }

  async addUserSubscription(reqBody) {
    const { userId, subscriptionId, monthStart, monthEnd } = reqBody;
    const [us] = await dbDevelopment('users_subscriptions')
      .insert({
        user_id: userId,
        subscription_id: subscriptionId,
        month_start: monthStart,
        month_end: monthEnd,
      })
      .returning('*');
    return us;
  }
  async updateUserSubscription(reqParams, reqBody) {
    const { userId, subscriptionId, monthStart, monthEnd } = reqBody;
    const [us] = await dbDevelopment('users_subscriptions')
      .update({
        user_id: userId,
        subscription_id: subscriptionId,
        month_start: monthStart,
        month_end: monthEnd,
      })
      .where('id', reqParams)
      .returning('*');
    return us;
  }
  async deleteUserSubscription(reqParams) {
    const [us] = await dbDevelopment('users_subscriptions')
      .where('id', reqParams)
      .del()
      .returning('*');
    return us;
  }
}

module.exports = new usersSubcriptionsDAO();
