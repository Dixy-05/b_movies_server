const { dbProduction, dbDevelopment } = require('../DB/db');

class moviesRequestsDAO {
  async getMoviesRequests() {
    const orders = await dbDevelopment.select('*').from('orders');
    return orders;
  }
  async getMovieRequest(reqParams) {
    const order = await dbDevelopment
      .select('*')
      .from('orders')
      .where('id', reqParams);
    return order;
  }
  async addMovieRequest(reqBody) {
    const { user_id, movie_id, subscription_id, month_id } = reqBody;
    const addedOrder = await dbDevelopment('orders')
      .insert({
        user_id: user_id,
        movie_id: movie_id,
        subscription_id: subscription_id,
        month_id: month_id,
      })
      .returning('*');
    return addedOrder;
  }
  async updateMovieRequest(reqParams, reqBody) {
    const { user_id, movie_id, subscription_id, month_id } = reqBody;
    const addedOrder = await dbDevelopment('orders')
      .where('id', reqParams)
      .update({
        user_id: user_id,
        movie_id: movie_id,
        subscription_id: subscription_id,
        month_id: month_id,
      })
      .returning('*');
    return addedOrder;
  }
  async deleteMovieRequest(reqParams) {
    const deletedOrder = await dbDevelopment('orders')
      .where('id', reqParams)
      .del()
      .returning('*');
    return deletedOrder;
  }
}
module.exports = new moviesRequestsDAO();
