import PersonAddressRepositoryMock from
    '../../src/data/repository/PersonAddressRepository/PersonAddressRepositoryMock';
import PersonAddressController from '../../src/presentation/controllers/PersonAddressController';
import CreatePersonAddressCommand from '../../src/domain/command/CreatePersonAddressCommand';
import * as faker from 'faker';

let personAddressRepository: PersonAddressRepositoryMock;
let personAddressController: PersonAddressController;

describe('Person address controller, query and command', async () => {

  beforeAll(async () => {
    personAddressRepository = new PersonAddressRepositoryMock();
    personAddressController = new PersonAddressController(personAddressRepository);
  });

  it('should add addresses to a person ', async () => {
    const addresses: CreatePersonAddressCommand[] = [
      {
        sector: faker.address.city(),
        building: faker.random.alphaNumeric(),
        number: faker.random.alphaNumeric(),
        detail: faker.address.secondaryAddress(),
        active: faker.random.boolean(),
        person: faker.random.number(),
        province: faker.random.number(),
        createdBy: faker.random.number(),
      },
      {
        sector: faker.address.city(),
        building: faker.random.alphaNumeric(),
        number: faker.random.alphaNumeric(),
        detail: faker.address.secondaryAddress(),
        active: faker.random.boolean(),
        person: faker.random.number(),
        province: faker.random.number(),
        createdBy: faker.random.number(),
      },
    ];

    const personAddress = await personAddressController.create(addresses);

    expect(personAddress.length).toBeGreaterThan(1);
    expect(personAddress[0]).toHaveProperty('id');
  });

});
