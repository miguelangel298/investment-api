import dotenv from 'dotenv';
import ConfigTest from '../ConfigTest/ConfigTest';
import { TokenData } from '../../src/application/config/TokenConfig';

dotenv.config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);
let user: TokenData;

describe('Gender route /api/genders', () => {

  beforeAll(async () => {
    user = await ConfigTest.getUserAdmin();
  });

  it('should return genders list', async (done) => {
    request.get('/api/genders')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .expect((res: Response) => {
        if (!('genders' in res.body))   throw new Error('Missing genders key');
      })
      .expect(200, done);
  });

});
