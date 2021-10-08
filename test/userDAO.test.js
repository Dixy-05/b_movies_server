const userDAO = require('../DAO/usersDAO');
const db = require('../DB/db');
jest.mock('../DB/db', () => {
  return {
    dbProduction: jest.fn(),
    dbDevelopment: {},
  };
});

const users = [{ id: 1, email: 'test@test.com' }];
describe('Get user', () => {
  describe('from database', () => {
    it('should call database once', async () => {
      db.select.mockReturnThis();
      db.from.mockResolvedValue(users);
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
    db = jest.fn().mockResolvedValue({
      insert: jest.fn().mockReturnThis(),
    });
    const result = await userDAO.createUser(reqBody);
    expect(result).toEqual(users[0]);
  });
});
