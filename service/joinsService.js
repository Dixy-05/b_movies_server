const joinsDAO = require('../DAO/joinsDAO');
class joinsService {
  async countOrdersPerMonth(table1, table2, id, month) {
    const crossJoin = await joinsDAO.countOrdersPerMonth(
      table1,
      table2,
      id,
      month
    );
    return crossJoin;
  }
}
module.exports = new joinsService();
