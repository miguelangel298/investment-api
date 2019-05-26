import * as faker from 'faker';
import dotenv from 'dotenv';
import CreatePersonCommand from '../../src/domain/command/CreatePersonCommand';

dotenv.config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);

describe('Person router', () => {

  it('should create a new person', async (done) => {
    const person: CreatePersonCommand = {
      names: faker.name.findName(),
      firstSurname: faker.name.lastName(),
      secondSurname: faker.name.lastName(),
      birthDate: new Date(),
      cardId: faker.random.number({ min: 112342125, max: 92501647964 }),
      genderBy: 1,
      nationalityBy: 1,
      createdBy: 1,
    };

    request.post('/api/persons')
      .set('Accept', 'application/json')
      .send(person)
      .expect((res: Response) => {
        if (!('persons' in res.body))   throw new Error('Missing persons key');
      })
      .expect(201, done);
  });

  it('should return a bad request due to lack of parameters', async (done) => {
    const person = {
      names: faker.name.findName(),
      secondSurname: faker.name.lastName(),
      birthDate: new Date(),
      genderBy: 1,
      nationalityBy: 1,
      createdBy: 1,
    };

    request.post('/api/persons')
      .set('Accept', 'application/json')
      .send(person)
      .expect((res: Response) => {
        if (!('message' in res.body))   throw new Error('Missing message key');
      })
      .expect(400, done);
  });

})
