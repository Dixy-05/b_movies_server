const authDAO = require('../DAO/authDAO');
const authService = require('../service/authService');
jest.mock('../DAO/authDAO');

describe('encrypted password', () => {
  it('should return 60 characters', async () => {
    let result = await authService.encryptPassword('secretPassword');
    expect(result.length).toBe(60);
  });
});
describe('Generate token', () => {
  it('should return token from email with 144 charecters or more', async () => {
    let result = await authService.generateAccessToken('someEmail@gmail.com');
    expect(result.length).toBeGreaterThanOrEqual(144);
  });
});

describe('Create ', () => {
  describe('new User in database', () => {
    beforeEach(() => {
      authDAO.registerUser.mockImplementation((reqBody) =>
        Promise.resolve({
          id: 'bdc0b4d3-3f17-4447-bc59-e18601ff72ec',
          email: reqBody.email,
          password: 'encrypted_password',
          created_at: ' 2021-10-01T20:12:18.900Z',
          updated_at: '2021-10-01T20:12:18.900Z',
        })
      );
      authService.encryptPassword = jest
        .fn()
        .mockImplementation(() => 'EncryptedTest123456');
    });

    it('should make only one call', async () => {
      await authService.registerUser({
        email: 'test3@gmail.com',
        password: 'Test123456',
      });
      expect(authDAO.registerUser.mock.calls.length).toBe(1);
    });
    it('should call the password ecryption once', async () => {
      await authService.registerUser({
        email: 'test3@gmail.com',
        password: 'Test123456',
      });
      expect(authService.encryptPassword.mock.calls.length).toBe(1);
    });

    it('should have email and password as parameters', async () => {
      await authService.registerUser({
        email: 'test3@gmail.com',
        password: 'Test123456',
      });
      expect(authDAO.registerUser.mock.calls[0][0].email).toBe(
        'test3@gmail.com'
      );
      expect(authDAO.registerUser.mock.calls[0][0].password).toBe(
        'EncryptedTest123456'
      );
    });
    it('should return the new user email', async () => {
      let result = await authService.registerUser({
        email: 'test3@gmail.com',
        password: 'Test123456',
      });
      expect(result.user.email).toEqual('test3@gmail.com');
    });
    it('should call the generate access token once', async () => {
      authService.generateAccessToken = jest.fn();
      await authService.registerUser({
        email: 'test3@gmail.com',
        password: 'Test123456',
      });
      expect(authService.generateAccessToken.mock.calls.length).toBe(1);
    });
  });
});

describe('Login user', () => {
  describe('into database', () => {
    beforeEach(async () => {
      authDAO.getUser = await jest.fn(() => true);
      authService.comparePassword = jest.fn(() => true);
    });
    it('should call authDAO.getUser once', async () => {
      await authService.loginUser({
        email: 'test3@gmail.com',
        password: 'Test123456',
      });
      expect(authDAO.getUser).toHaveBeenCalledTimes(1);
    });
    it('should login with email and password', async () => {
      await authService.loginUser({
        email: 'test3@gmail.com',
        password: 'Test123456',
      });
      expect(authDAO.getUser.mock.calls[0][0].email).toBe('test3@gmail.com');
      expect(authDAO.getUser.mock.calls[0][0].password).toBe('Test123456');
    });
    it('should call comparePassword function', async () => {
      await authService.loginUser({});
      expect(authService.comparePassword.mock.calls.length).toBe(1);
    });
    it('should call generateAccesToken function', async () => {
      authService.generateAccessToken = jest
        .fn()
        .mockImplementation(() => ({ accessToken: 'accessToken' }));
      await authService.loginUser({});
      expect(authService.generateAccessToken.mock.calls.length).toBe(1);
    });
  });
});

describe('Compare password', () => {
  it('should compare if password given is equal to stored password', async () => {
    const database = [
      {
        user: 'user1',
        password:
          '$2b$10$MKjsxSQSJ.8N.If33tUy0Ol6UVO1mIIGD/.Yq0b95FNQeBwEl8Pre',
      },
    ];
    const password = 'secretPassword';
    const hash = database[0].password;
    const result = await authService.comparePassword(password, hash);
    expect(result).toBe(true);
  });
});
