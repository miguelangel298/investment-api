import dotenv from 'dotenv';

dotenv.config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);

describe('User route /api/users', () => {

  it('should get a user with method GET /api/users/:username', async (done) => {
    request.get('/api/users/admin')
      .set('Accept', 'application/json')
      .expect((res: Response) => {
        if (!('users' in res.body))   throw new Error('Missing users key');
      })
      .expect(200, done);

  });
});
