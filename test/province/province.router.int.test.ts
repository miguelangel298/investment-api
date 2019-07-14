import dotenv from 'dotenv';
import { TokenData } from '../../src/application/config/TokenConfig';
import ConfigTest from '../ConfigTest/ConfigTest';

dotenv.config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);
let user: TokenData;

describe('Province route /api/provinces', () => {

  beforeAll(async (done) => {
    user = await ConfigTest.getUserAdmin();
    done();
  });

  it('should return provinces list', async (done) => {
    request.get('/api/provinces')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .expect((res: Response) => {
        if (!('provinces' in res.body))   throw new Error('Missing provinces key');
      })
      .expect(200, done);
  });

});
