import dotenv from 'dotenv';
import { TokenData } from '../../src/application/config/TokenConfig';
import ConfigTest from '../ConfigTest/ConfigTest';

dotenv.config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);
let user: TokenData;

describe('Branch office route /api/branch-offices', () => {

  beforeAll(async () => {
    user = await ConfigTest.getUserAdmin();
  });

  it('should return branch offices list', async (done) => {
    request.get('/api/branch-offices')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .expect((res: Response) => {
        if (!('branch_offices' in res.body))   throw new Error('Missing branch_offices key');
      })
      .expect(200, done);
  });

});
