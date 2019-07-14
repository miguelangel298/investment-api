import * as faker from 'faker';
import dotenv from 'dotenv';
import CreatePersonCommand from '../../src/domain/command/CreatePersonCommand';
import PersonRepository from '../../src/data/repository/PersonRepository/PersonRepository';
import { getCustomRepository } from 'typeorm';
import ConfigTest from '../ConfigTest/ConfigTest';
import { TokenData } from '../../src/application/config/TokenConfig';

dotenv.config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);
let person: any;
let personRepository: PersonRepository;
let user : TokenData;

describe('Person router', () => {

  beforeAll(async () => {
    user = await ConfigTest.getUserAdmin();
    personRepository = await getCustomRepository(PersonRepository);
    person = await personRepository.findOne();
  });

  it('should create a new person', async (done) => {
    const person: CreatePersonCommand = {
      names: faker.name.findName(),
      firstSurname: faker.name.lastName(),
      secondSurname: faker.name.lastName(),
      birthDate: new Date(),
      cardId: faker.random.number({ min: 112342125, max: 92501647964 }),
      genderBy: 1,
      nationalityBy: 1,
      createdBy: user.user.person.id,
    };

    request.post('/api/persons')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
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
      createdBy: user.user.person.id,
    };

    request.post('/api/persons')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .send(person)
      .expect((res: Response) => {
        if (!('message' in res.body))   throw new Error('Missing message key');
      })
      .expect(400, done);
  });

  it('Test of Find Person in the route with method GET /api/persons/:ID', async (done) => {

    request
      .get(`/api/persons/${person.cardId}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${user.token}`)
      .expect((res: any) => {
        if (!('persons' in res.body))   throw new Error('Missing persons key');
        if (!('id' in res.body.persons))   throw new Error('Missing id key');
      })
      .expect(200, done);
  });

  it('should router /api/persons/:cardID  return a bad request due to lack of parameters',
     async (done) => {
       request.post('/api/persons/')
         .set('Accept', 'application/json')
         .set('Authorization', `Bearer ${user.token}`)
         .expect((res: Response) => {
           if (!('message' in res.body))   throw new Error('Missing message key');
         })
         .expect(400, done);
     });

});
