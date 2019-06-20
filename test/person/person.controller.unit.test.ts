import IPersonRepository from '../../src/data/repository/PersonRepository/IPersonRepository';
import PersonController from '../../src/presentation/controllers/PersonController';
import * as faker from 'faker';
import CreatePersonCommand,
{ CreatePersonCommandHandler } from '../../src/domain/command/CreatePersonCommand';
import GetPersonByCardIdQuery,
{ GetPersonByCardIdQueryHandler } from '../../src/domain/queries/GetPersonByCardIdQuery';
import IGenderRepository from '../../src/data/repository/GenderRepository/IGenderRepository';
import INationalityRepository from
    '../../src/data/repository/NationalityRepository/INationalityRepository';
import IUserRepository from '../../src/data/repository/UserRepository/IUserRepository';
import GenderEntity from '../../src/data/entities/GenderEntity';
import NationalityEntity from '../../src/data/entities/NationalityEntity';
import UserEntity from '../../src/data/entities/UserEntity';
import PersonRepositoryMock from '../../src/data/repository/PersonRepository/PersonRepositoryMock';
import GenderRepositoryMock from '../../src/data/repository/GenderRepository/GenderRepositoryMock';
import NationalityRepositoryMock
  from
    '../../src/data/repository/NationalityRepository/NationalityRepositoryMock';
import UserRepositoryMock from '../../src/data/repository/UserRepository/UserRepositoryMock';

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
    personRepository = new PersonRepositoryMock();
    genderRepository =  new GenderRepositoryMock();
    nationalityRepository = new NationalityRepositoryMock();
    userRepository = new UserRepositoryMock();
    personController = new PersonController(personRepository);

    gender = await genderRepository.findOne();
    nationality = await nationalityRepository.findOne();
    user = await userRepository.findOne();
    done();
  });

  it('should created a new Person', async (done) => {
    // Find person in person repository mock
    const personFind = await personRepository.findOne();
    const person: CreatePersonCommand = {
      names: personFind.names,
      firstSurname: faker.name.lastName(),
      secondSurname: faker.name.lastName(),
      birthDate: new Date(),
      cardId: personFind.cardId,
      genderBy:gender.id ,
      nationalityBy: nationality.id,
      createdBy: user.id,
    };
  // created person
    const createPersonCommandHandler =
      new CreatePersonCommandHandler(personRepository);
    await createPersonCommandHandler.handle(person);

    // Search the person after created.
    const query: GetPersonByCardIdQuery = {
      cardID: person.cardId,
    };
    const getPersonByCardIdQueryHandler =
      new GetPersonByCardIdQueryHandler(personRepository);

    const personCreated = await getPersonByCardIdQueryHandler.handle(query);
    expect(person.names).toEqual(personCreated.names);
    done();
  });

  it('should Get a person and return it', async(done) => {

    // Find person in person repository mock
    const personFind = await personRepository.findOne();
    const param: GetPersonByCardIdQuery = {
      cardID: personFind.cardId,
    };

    const person = await personController.show(param);

    expect(person).toHaveProperty('id');
    expect(param.cardID).toEqual(person.cardId);
    done();
  });

});
