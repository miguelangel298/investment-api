import dotenv from 'dotenv';
import ConfigTest from '../ConfigTest/ConfigTest';
import { TokenData } from '../../src/application/config/TokenConfig';

dotenv.config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);
let user: TokenData;

describe('Country route /api/countries', () => {

  beforeAll(async () => {
    user = await ConfigTest.getUserAdmin();
  });

  it('should return countries list', async (done) => {
    request.get('/api/countries')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .expect((res: Response) => {
        if (!('countries' in res.body))   throw new Error('Missing countries key');
      })
      .expect(200, done);
  });

});
