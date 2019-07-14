import dotenv from 'dotenv';
import ConfigTest from '../ConfigTest/ConfigTest';
import { TokenData } from '../../src/application/config/TokenConfig';
import * as faker from 'faker';

dotenv.config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);
let user: TokenData;

describe('Additional information route /api/additional-information', () => {

  beforeAll(async () => {
    user = await ConfigTest.getUserAdmin();
  });

  it('should create new register of additional information to person', async (done) => {
    const newAdditionalInformation = {
      fatherName: faker.name.firstName(),
      motherName: faker.name.firstName(2),
      civilStatus: 1,
      dependents: faker.random.number(1),
      person: 2,
    };

    request.post('/api/additional-information')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .send(newAdditionalInformation)
      .expect((res: Response) => {
        if (!('additionalInformation' in res.body)) {
          throw new Error('Missing additionalInformation key');
        }
      })
      .expect(201, done);
  });

  it('should return a bad request due to lack of parameters add additional information', (done) => {
    const newAdditionalInformation = {
      fatherName: faker.name.firstName(),
      motherName: faker.name.firstName(2),
      dependents: faker.random.number(1),
    };

    request.post('/api/additional-information')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .send(newAdditionalInformation)
      .expect((res: Response) => {
        if (!('message' in res.body)) {
          throw new Error('Missing message key');
        }
      })
      .expect(400, done);
  });

  it('should return additional information of a person', (done) => {

    request.get(`/api/additional-information/${user.user.person.id}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .expect((res: Response) => {
        if (!('additionalInformation' in res.body)) {
          throw new Error('Missing additionalInformation key');
        }
      })
      .expect(200, done);
  });

});
