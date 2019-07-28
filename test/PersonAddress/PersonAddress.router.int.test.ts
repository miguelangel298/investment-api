import dotenv from 'dotenv';
import * as faker from 'faker';
import ConfigTest from '../ConfigTest/ConfigTest';
import { TokenData } from '../../src/application/config/TokenConfig';

dotenv.config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);
let user: TokenData;

describe('PersonAddress route /api/person-address', () => {

  beforeAll(async () => {
    user = await ConfigTest.getUserAdmin();
  });

  it('should add new addresses to person', async (done) => {
    const params = {
      personAddress: [
        {
          sector: faker.address.city(),
          building: faker.random.alphaNumeric(),
          number: faker.random.alphaNumeric(),
          detail: faker.address.secondaryAddress(),
          active: 1,
          person: user.user.person.id,
          province: 1,
          createdBy: user.user.id,
        },
        {
          sector: faker.address.city(),
          building: faker.random.alphaNumeric(),
          number: faker.random.alphaNumeric(),
          detail: faker.address.secondaryAddress(),
          active: 1,
          person: user.user.person.id,
          province: 1,
          createdBy: user.user.id,
        },
      ],
    };
    request.post('/api/person-address')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .send(params)
      .expect((res: Response) => {
        if (!('personAddress' in res.body))   throw new Error('Missing personAddress key');
      })
      .expect(201, done);
  });

  it('should return a bad request due to lack of parameters', async (done) => {
    const params = {
      personAddress: [
        {
          sector: faker.address.city(),
          building: faker.random.alphaNumeric(),
          number: faker.random.alphaNumeric(),
          detail: faker.address.secondaryAddress(),
          active: faker.random.boolean(),
          province: faker.random.number(),
          createdBy: faker.random.number(),
        },
        {
          sector: faker.address.city(),
          building: faker.random.alphaNumeric(),
          number: faker.random.alphaNumeric(),
          detail: faker.address.secondaryAddress(),
          active: faker.random.boolean(),
          province: faker.random.number(),
          createdBy: faker.random.number(),
        },
      ],
    };
    request.post('/api/person-address')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .send(params)
      .expect((res: Response) => {
        if (!('message' in res.body))   throw new Error('Missing message key');
      })
      .expect(400, done);
  });

});
