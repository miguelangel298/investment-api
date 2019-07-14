import dotenv from 'dotenv';
import ConfigTest from '../ConfigTest/ConfigTest';
import { TokenData } from '../../src/application/config/TokenConfig';

dotenv.config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);
let user: TokenData;

describe('Civil status route /api/civil-status', () => {

  beforeAll(async () => {
    user = await ConfigTest.getUserAdmin();
  });

  it('should return civil status list', async (done) => {
    request.get('/api/civil-status')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .expect((res: Response) => {
        if (!('civil_status' in res.body))   throw new Error('Missing civil_status key');
      })
      .expect(200, done);
  });

});
