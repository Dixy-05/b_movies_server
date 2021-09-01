const { dbProduction, dbDevelopment } = require('../DB/db');

class joinsDAO {
  async countOrdersPerMonth(table1, table2, id, month) {
    const ordersMonthly = await dbDevelopment('');
    return ordersMonthly;
  }
}
module.exports = new joinsDAO();
