import dotenv from 'dotenv';
import CreateUserCommand from '../../src/domain/command/CreateUserCommand';
import * as faker from 'faker';

dotenv.config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);

describe('User route /api/users', () => {

  it('should get a user with method GET /api/users/:username', async (done) => {
    request.get('/api/users/admin')
      .set('Accept', 'application/json')
      .expect((res: Response) => {
        if (!('users' in res.body))   throw new Error('Missing users key');
      })
      .expect(200, done);
  });

  it('should create a new user', async (done) => {
    const user: CreateUserCommand = {
      username: faker.internet.userName(faker.name.findName(), faker.name.lastName()),
      password: faker.internet.password(6, true, faker.random.alphaNumeric(6)),
      person: 1,
      role: 1,
      userStatus: 1,
      createdBy: 1,
    };

    request.post('/api/users')
      .set('Accept', 'application/json')
      .send(user)
      .expect((res: Response) => {
        if (!('users' in res.body))   throw new Error('Missing users key');
      })
      .expect(201, done);
  });

  it('should return a bad request due to lack of parameters', async (done) => {
    const user = {
      username: faker.internet.userName(faker.name.findName(), faker.name.lastName()),
      person: 1,
      role: 1,
      createdBy: 1,
    };

    request.post('/api/users')
      .set('Accept', 'application/json')
      .send(user)
      .expect((res: Response) => {
        if (!('message' in res.body))   throw new Error('Missing message key');
      })
      .expect(400, done);
  });
});
