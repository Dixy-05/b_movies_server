const userControllers = require('../controllers/usersControllers');
const usersService = require('../service/usersService');
jest.mock('../service/usersService');

const database = [
  { id: 1, user: 'user1@gmail.com' },
  { id: 2, user: 'user2@gmail.com' },
  { id: 3, user: 'user3@gmail.com' },
  { id: 4, user: 'user4@gmail.com' },
];
const searchUser = (email) => {
  let search = database.filter((users) => users.user === email);
  return search;
};

describe('Get users', () => {
  test('should be called once', async () => {
    jest.spyOn(usersService, 'getUsers');
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
    };
    await userControllers.getUsers('req', res);
    expect(usersService.getUsers).toHaveBeenCalledTimes(1);
  });
  test('should return all users from database', async () => {
    let callDatabase = jest
      .spyOn(usersService, 'getUsers')
      .mockReturnValue(database);
    const res = {
      status: jest.fn(() => ({
        json: jest.fn(() => ({ users: callDatabase() })),
      })),
    };
    let result = await userControllers.getUsers('req', res);
    expect(result.users).toBe(database);
  });
  test('should throw error if cannot get users', async () => {
    let err = await jest
      .spyOn(usersService, 'getUsers')
      .mockImplementation(() => {
        throw new Error();
      });
    const res = {
      status: jest.fn(() => ({
        json: jest.fn(() => ({
          error: err,
        })),
      })),
    };
    let result = await userControllers.getUsers('req', res);
    expect(result.error).toThrowError();
  });
});

describe('Get user', () => {
  describe('from database', () => {
    test('should call usersService.getUser once', async () => {
      let user = jest.spyOn(usersService, 'getUser').mockImplementation(() => {
        return searchUser('user3@gmail.com');
      });
      const req = { params: { email: 'email@gmail.com' } };
      const res = {
        status: jest.fn(() => ({
          json: jest.fn(() => ({})),
        })),
      };
      await userControllers.getUser(req, res);
      expect(user).toHaveBeenCalledTimes(1);
    });
    test('should return a user', async () => {
      const req = { params: { email: 'email@gmail.com' } };
      let user = jest.spyOn(usersService, 'getUser').mockImplementation(() => {
        return searchUser('user3@gmail.com');
      });
      const res = {
        status: jest.fn(() => ({
          json: jest.fn(() => ({ user: user() })),
        })),
      };
      let result = await userControllers.getUser(req, res);
      expect(result.user[0]).toEqual({ id: 3, user: 'user3@gmail.com' });
    });
    test('should throw error if cannot get user', async () => {
      let err = await jest
        .spyOn(usersService, 'getUser')
        .mockImplementation(() => {
          throw new Error();
        });
      const req = { params: { email: 'email@gmail.com' } };
      const res = {
        status: jest.fn(() => ({
          json: jest.fn(() => ({
            error: err,
          })),
        })),
      };
      let result = await userControllers.getUser(req, res);
      expect(result.error).toThrowError();
    });
  });
});

describe('Create user', () => {
  describe('in database', () => {
    test('should call usersService.createUser ', async () => {
      let user = jest
        .spyOn(usersService, 'createUser')
        .mockImplementation(() => {});
      const req = {
        body: { email: 'email@gmail.com', password: 'Emailpassword321' },
      };
      const res = {
        status: jest.fn(() => ({
          json: jest.fn(() => ({ user: user() })),
        })),
      };
      await userControllers.createUser(req, res);
      expect(user).toHaveBeenCalled();
    });
    test('should return created user', async () => {
      let user = jest
        .spyOn(usersService, 'createUser')
        .mockImplementation(() => {
          database.push({ id: 5, user: 'user5@gmail.com' });
          return searchUser('user5@gmail.com');
        });
      const req = {
        body: { email: 'email@gmail.com', password: 'Emailpassword321' },
      };
      const res = {
        status: jest.fn(() => ({
          json: jest.fn(() => ({ user: user() })),
        })),
      };
      let result = await userControllers.createUser(req, res);
      expect(result.user[0]).toEqual({ id: 5, user: 'user5@gmail.com' });
    });
    test('should throw error if cannot get user', async () => {
      let err = await jest
        .spyOn(usersService, 'createUser')
        .mockImplementation(() => {
          throw new Error();
        });
      const req = {
        body: { email: 'email@gmail.com', password: 'Emailpassword321' },
      };

      const res = {
        status: jest.fn(() => ({
          json: jest.fn(() => ({
            error: err,
          })),
        })),
      };
      let result = await userControllers.createUser(req, res);
      expect(result.error).toThrowError();
    });
  });
});

describe('Delete User', () => {
  describe('from database', () => {
    test('should call usersService.deleteUser once', async () => {
      let user = jest
        .spyOn(usersService, 'deleteUser')
        .mockImplementation(() => {
          return searchUser('user3@gmail.com');
        });
      const req = { params: { email: 'email@gmail.com' } };
      const res = {
        status: jest.fn(() => ({
          json: jest.fn(() => ({})),
        })),
      };
      await userControllers.deleteUser(req, res);
      expect(user).toHaveBeenCalledTimes(1);
    });
    test('should return deleted user', async () => {
      const req = { params: { email: 'email@gmail.com' } };
      let user = jest
        .spyOn(usersService, 'deleteUser')
        .mockImplementation(() => {
          let search = searchUser('user4@gmail.com');
          newDatabase = [...database];
          newDatabase.pop();
          return search;
        });
      const res = {
        status: jest.fn(() => ({
          json: jest.fn(() => ({ user: user() })),
        })),
      };
      let result = await userControllers.deleteUser(req, res);
      expect(result.user[0]).toEqual({ id: 4, user: 'user4@gmail.com' });
    });
    test('should throw error if cannot get user', async () => {
      let err = await jest
        .spyOn(usersService, 'deleteUser')
        .mockImplementation(() => {
          throw new Error();
        });
      const req = { params: { email: 'email@gmail.com' } };
      const res = {
        status: jest.fn(() => ({
          json: jest.fn(() => ({
            error: err,
          })),
        })),
      };
      let result = await userControllers.deleteUser(req, res);
      expect(result.error).toThrowError();
    });
  });
});
