import dotenv from 'dotenv';
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

describe('Branch office route /api/branch-offices', () => {

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

  it('should return branch offices list', async (done) => {
    request.get('/api/branch-offices')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .expect((res: Response) => {
        if (!('branch_offices' in res.body))   throw new Error('Missing branch_offices key');
      })
      .expect(200, done);
  });

});
