const { dbProduction, dbDevelopment } = require('../DB/db');

class monthsDAO {
  async getMonths() {
    const months = dbDevelopment.select('*').from('months');
    return months;
  }
}
module.exports = new monthsDAO();
