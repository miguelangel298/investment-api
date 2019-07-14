import dotenv from 'dotenv';
import CreateUserCommand from '../../src/domain/command/CreateUserCommand';
import * as faker from 'faker';
import ConfigTest from '../ConfigTest/ConfigTest';
import { TokenData } from '../../src/application/config/TokenConfig';

dotenv.config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);
let user: TokenData;

describe('User route /api/users', () => {
  beforeAll(async (done) => {
    user = await ConfigTest.getUserAdmin();
    done();
  });

  it('should get a user with method GET /api/users/:username', async (done) => {
    request.get('/api/users/admin')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .expect((res: Response) => {
        if (!('users' in res.body))   throw new Error('Missing users key');
      })
      .expect(200, done);
  });

  it('should create a new user', async (done) => {
    const newUser: CreateUserCommand = {
      username: faker.internet.userName(faker.name.findName(), faker.name.lastName()),
      password: faker.internet.password(6, true, faker.random.alphaNumeric(6)),
      person: user.user.person.id,
      role: 1,
      userStatus: 1,
      createdBy: user.user.id,
    };

    request.post('/api/users')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .send(newUser)
      .expect((res: Response) => {
        if (!('users' in res.body))   throw new Error('Missing users key');
      })
      .expect(201, done);
  });

  it('should return a bad request due to lack of parameters', async (done) => {
    const newUser = {
      username: faker.internet.userName(faker.name.findName(), faker.name.lastName()),
      person: user.user.person.id,
      role: 1,
      createdBy: user.user.id,
    };

    request.post('/api/users')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .send(newUser)
      .expect((res: Response) => {
        if (!('message' in res.body))   throw new Error('Missing message key');
      })
      .expect(400, done);
  });
});
