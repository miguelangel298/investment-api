import dotenv from 'dotenv';
import CreateUserCommand from '../../src/domain/command/CreateUserCommand';
import * as faker from 'faker';
import UserDTO from '../../src/domain/DTOs/UserDTO';
import UserRepository from '../../src/data/repository/UserRepository/UserRepository';
import DatabaseConnection from '../../src/data/DatabaseConnection';
import { getCustomRepository } from 'typeorm';
import { GetUserLoginQueryHandler } from '../../src/domain/queries/GetUserLoginQuery';
import { AuthUser, TokenData } from '../../src/application/config/TokenConfig';
import getPermissions from '../../src/application/util/getPermissions';
import { TokenService } from '../../src/application/util/TokenService';

dotenv.config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);
let token : string;
let user : UserDTO;
let userRepository: UserRepository;

describe('User route /api/users', () => {
  beforeAll(async () => {
    await DatabaseConnection.connect();
    userRepository = getCustomRepository(UserRepository);
    const queryHandler = new GetUserLoginQueryHandler(userRepository);
    user = await queryHandler.handle({ username: 'admin' });

    const authUser: AuthUser = {
      id: user.id,
      role: user.role.name,
      fullName: `${user.person.names} ${user.person.firstSurname} ${user.person.secondSurname}`,
      person: { id:user.person.id },
      permission: getPermissions(user),
    };
    const tokenData: TokenData = TokenService.createToken(authUser,
                                                          process.env.SECRET_KEY,
                                                          process.env.TOKEN_EXPIRESIN);
    token = tokenData.token;

  });
  it('should get a user with method GET /api/users/:username', async (done) => {
    request.get('/api/users/admin')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
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
      .set('Authorization', `Bearer ${token}`)
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
      .set('Authorization', `Bearer ${token}`)
      .send(user)
      .expect((res: Response) => {
        if (!('message' in res.body))   throw new Error('Missing message key');
      })
      .expect(400, done);
  });
});
