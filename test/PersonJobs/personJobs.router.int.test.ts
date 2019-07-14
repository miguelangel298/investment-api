import dotenv from 'dotenv';
import * as faker from 'faker';
import ConfigTest from '../ConfigTest/ConfigTest';
import { TokenData } from '../../src/application/config/TokenConfig';

dotenv.config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);
let user: TokenData;

describe('PersonJobs route /api/person-jobs', () => {

  beforeAll(async () => {
    user = await ConfigTest.getUserAdmin();
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
          currentJob: true,
          person: user.user.person.id,
          branchOffice: 1,
          createdBy: user.user.id,
        },
        {
          position: faker.name.jobTitle(),
          supervisorName: faker.name.findName(),
          supervisorPhone: faker.phone.phoneNumber(),
          salary: faker.random.number(),
          dateAdmission: new Date(),
          employeeCode: faker.random.alphaNumeric(3),
          currentJob: true,
          person: user.user.person.id,
          branchOffice: 1,
          createdBy: user.user.id,
        },
      ],
    };
    request.post('/api/person-jobs')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
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
          person: user.user.person.id,
          branchOffice: 1,
          createdBy: user.user.id,
        },
        {
          position: faker.name.jobTitle(),
          supervisorName: faker.name.findName(),
          supervisorPhone: faker.phone.phoneNumber(),
          salary: faker.random.number(),
          dateAdmission: new Date(),
          currentJob: faker.random.boolean(),
          person: user.user.person.id,
          branchOffice: 1,
          createdBy: user.user.id,
        },
      ],
    };
    request.post('/api/person-jobs')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .send(params)
      .expect((res: Response) => {
        if (!('message' in res.body))   throw new Error('Missing message key');
      })
      .expect(400, done);
  });

  it('should return jobs list of a person', async (done) => {
    request.get(`/api/person-jobs/${user.user.person.id}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .expect((res: Response) => {
        if (!('personJobs' in res.body))   throw new Error('Missing personJobs key');
      })
      .expect(200, done);
  });

  it('should update job information to person', async (done) => {
    const params: any = {
      personJobs: [
        {
          id: 1,
          position: faker.name.jobTitle(),
          supervisorName: faker.name.findName(),
          supervisorPhone: faker.phone.phoneNumber(),
          salary: faker.random.number(),
          dateAdmission: new Date(),
          employeeCode: faker.random.alphaNumeric(3),
          currentJob: faker.random.boolean(),
          person: user.user.person.id,
          branchOffice: 1,
        },
      ],
    };
    request.put('/api/person-jobs')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .send(params)
      .expect((res: any) => {
        if (!('personJobs' in res.body))   throw new Error('Missing personJobs key');
      })
      .expect(201, done);
  });
});
