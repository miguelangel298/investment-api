import dotenv from 'dotenv';
import ConfigTest from '../ConfigTest/ConfigTest';
import { TokenData } from '../../src/application/config/TokenConfig';

dotenv.config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);
let user: TokenData;

describe('Municipality route /api/municipalities', () => {

  beforeAll(async () => {
    user = await ConfigTest.getUserAdmin();
  });

  it('should return municipalities list', async (done) => {
    request.get('/api/municipalities')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .expect((res: Response) => {
        if (!('municipalities' in res.body))   throw new Error('Missing municipalities key');
      })
      .expect(200, done);
  });

});
