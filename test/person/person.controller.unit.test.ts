import dotenv from 'dotenv';
import IPersonRepository from '../../src/data/repository/PersonRepository/IPersonRepository';
import PersonRepository from '../../src/data/repository/PersonRepository/PersonRepository';
import DatabaseConnection from '../../src/data/DatabaseConnection';
import PersonController from '../../src/presentation/controllers/PersonController';
import * as faker from 'faker';
import { getCustomRepository } from 'typeorm';
import CreatePersonCommand,
{ CreatePersonCommandHandler } from '../../src/domain/command/CreatePersonCommand';
import GetPersonByCardIdQuery,
{ GetPersonByCardIdQueryHandler } from '../../src/domain/queries/GetPersonByCardIdQuery';
import IGenderRepository from '../../src/data/repository/GenderRepository/IGenderRepository';
import INationalityRepository from
    '../../src/data/repository/NationalityRepository/INationalityRepository';
import IUserRepository from '../../src/data/repository/UserRepository/IUserRepository';
import GenderRepository from '../../src/data/repository/GenderRepository/GenderRepository';
import NationalityRepository
  from '../../src/data/repository/NationalityRepository/NationalityRepository';
import UserRepository from '../../src/data/repository/UserRepository/UserRepository';
import GenderEntity from '../../src/data/entities/GenderEntity';
import NationalityEntity from '../../src/data/entities/NationalityEntity';
import UserEntity from '../../src/data/entities/UserEntity';

dotenv.config();

let personRepository: IPersonRepository;
let genderRepository: IGenderRepository;
let nationalityRepository: INationalityRepository;
let userRepository: IUserRepository;
let personController: PersonController;
let gender: GenderEntity;
let nationality: NationalityEntity;
let user: UserEntity;

describe('Person controller, command and query', () => {
  beforeAll(async (done) => {
    await DatabaseConnection.connect();
    personRepository = getCustomRepository(PersonRepository);
    genderRepository =  getCustomRepository(GenderRepository);
    nationalityRepository = getCustomRepository(NationalityRepository);
    userRepository = getCustomRepository(UserRepository);
    personController = new PersonController(personRepository);

    gender = await genderRepository.findOne();
    nationality = await nationalityRepository.findOne();
    user = await userRepository.findOne();
    done();
  });

  it('should created a new Person', async (done) => {
    const person: CreatePersonCommand = {
      names: faker.name.firstName(),
      firstSurname: faker.name.lastName(),
      secondSurname: faker.name.lastName(),
      birthDate: new Date(),
      cardId: faker.random.number({ min: 112354980, max: 2222222222 }),
      genderBy:gender.id ,
      nationalityBy: nationality.id,
      createdBy: user.id,
    };
  // created person
    const createPersonCommandHandler =
      new CreatePersonCommandHandler(personRepository);
    await createPersonCommandHandler.handle(person);

    // Find the person created before
    const query: GetPersonByCardIdQuery = {
      cardID: person.cardId,
    };
    const getPersonByCardIdQueryHandler =
      new GetPersonByCardIdQueryHandler(personRepository);

    const personCreated = await getPersonByCardIdQueryHandler.handle(query);
    expect(person.names).toEqual(personCreated.names);
    done();
  });
});
