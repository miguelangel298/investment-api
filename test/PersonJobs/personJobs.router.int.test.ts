import dotenv from 'dotenv';
import UserDTO from '../../src/domain/DTOs/UserDTO';
import UserRepository from '../../src/data/repository/UserRepository/UserRepository';
import DatabaseConnection from '../../src/data/DatabaseConnection';
import { getCustomRepository } from 'typeorm';
import { GetUserLoginQueryHandler } from '../../src/domain/queries/GetUserLoginQuery';
import { AuthUser, TokenData } from '../../src/application/config/TokenConfig';
import getPermissions from '../../src/application/util/getPermissions';
import { TokenService } from '../../src/application/util/TokenService';
import * as faker from 'faker';

dotenv.config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);
let token : string;
let user : UserDTO;
let userRepository: UserRepository;

describe('PersonJobs route /api/person-jobs', () => {

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

  it('should add new job information to person', async (done) => {
    const params = {
      personJobs: [
        {
          position: faker.name.jobTitle(),
          supervisorName: faker.name.findName(),
          supervisorPhone: faker.phone.phoneNumber(),
          salary: faker.random.number(),
          dateAdmission: new Date(),
          employeeCode: faker.random.alphaNumeric(3),
          currentJob: faker.random.boolean(),
          person: user.person.id,
          branchOffice: 1,
          createdBy: 1,
        },
        {
          position: faker.name.jobTitle(),
          supervisorName: faker.name.findName(),
          supervisorPhone: faker.phone.phoneNumber(),
          salary: faker.random.number(),
          dateAdmission: new Date(),
          employeeCode: faker.random.alphaNumeric(3),
          currentJob: faker.random.boolean(),
          person: user.person.id,
          branchOffice: 1,
          createdBy: 1,
        },
      ],
    };
    request.post('/api/person-jobs')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send(params)
      .expect((res: Response) => {
        if (!('personJobs' in res.body))   throw new Error('Missing personJobs key');
      })
      .expect(201, done);
  });

  it('should return a bad request due to lack of parameters', async (done) => {
    const params = {
      personJobs: [
        {
          position: faker.name.jobTitle(),
          supervisorName: faker.name.findName(),
          supervisorPhone: faker.phone.phoneNumber(),
          salary: faker.random.number(),
          dateAdmission: new Date(),
          currentJob: faker.random.boolean(),
          person: user.person.id,
          branchOffice: 1,
          createdBy: 1,
        },
        {
          position: faker.name.jobTitle(),
          supervisorName: faker.name.findName(),
          supervisorPhone: faker.phone.phoneNumber(),
          salary: faker.random.number(),
          dateAdmission: new Date(),
          currentJob: faker.random.boolean(),
          person: user.person.id,
          branchOffice: 1,
          createdBy: 1,
        },
      ],
    };
    request.post('/api/person-jobs')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send(params)
      .expect((res: Response) => {
        console.log(res.body);
        if (!('message' in res.body))   throw new Error('Missing message key');
      })
      .expect(400, done);
  });

});