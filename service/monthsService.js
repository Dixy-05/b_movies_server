const monthsDAO = require('../DAO/monthsDAO');

class monthsService {
  async getMonths() {
    const months = await monthsDAO.getMonths();
    return months;
  }
}
module.exports = new monthsService();
