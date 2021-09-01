const moviesRequestsDAO = require('../DAO/moviesRequestsDAO');

class moviesRequestsService {
  async getMoviesRequests() {
    const orders = await moviesRequestsDAO.getMoviesRequests();
    return orders;
  }
  async getMovieRequest(reqParams) {
    const order = await moviesRequestsDAO.getOrder(reqParams);
    if (order.length === 0) {
      throw `The order with the given id "${reqParams}" does not exist.`;
    }
    return order;
  }
  async addMovieRequest(reqBody) {
    const order = await moviesRequestsDAO.addMovieRequest(reqBody);
    return order;
  }
  async updateMovieRequest(reqParams, reqBody) {
    const order = await moviesRequestsDAO.updateMovieRequest(
      reqParams,
      reqBody
    );
    if (order.length === 0) {
      throw `The order with the given id "${reqParams}" does not exist.`;
    }
    return order;
  }
  async deleteMovieRequest(reqParams) {
    const order = await moviesRequestsDAO.deleteMovieRequest(reqParams);
    if (order.length === 0) {
      throw `The order with the given id "${reqParams}" does not exist.`;
    }
    return order;
  }
}

module.exports = new moviesRequestsService();
