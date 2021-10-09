const userDAO = require('../DAO/usersDAO');
const db = require('../DB/db');
jest.mock('../DB/db');
let { dbProduction } = require('../DB/db');

const users = [{ id: 1, email: 'test@test.com' }];
describe('Get user', () => {
  describe('from database', () => {
    it('should call database once', async () => {
      dbProduction.select.mockReturnThis();
      dbProduction.from.mockResolvedValue(users);
      const result = await userDAO.getUsers();
      expect(result).toEqual(users);
    });
  });
});

describe('Create user', () => {
  const reqBody = {
    email: 'email',
    password: 'password',
  };
  it('should insert on database', async () => {
    dbProduction.mockReturnValue({
      insert: jest.fn().mockReturnThis(),
      returning: jest.fn().mockResolvedValue([users[0]]),
    });
    const result = await userDAO.createUser(reqBody);
    expect(result).toEqual(users[0]);
  });
});
