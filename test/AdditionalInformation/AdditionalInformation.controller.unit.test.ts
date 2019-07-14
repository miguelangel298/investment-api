// tslint:disable-next-line:max-line-length
import AdditionalInformationRepositoryMock from
    '../../src/data/repository/AdditionalInformationRepository/AdditionalInformationRepositoryMock';
import AdditionalInformationController from
    '../../src/presentation/controllers/AdditionalInformationController';
import * as faker from 'faker';
import GetAdditionalInformationQuery from '../../src/domain/queries/GetAdditionalInformationQuery';
import UpdateAdditionalInformationCommand
  from '../../src/domain/command/UpdateAdditionalInformationCommand';

let additionalInformationRepository: AdditionalInformationRepositoryMock;
let additionalInformationController: AdditionalInformationController;

describe('Additional information controller, query and command', async () => {

  beforeAll(async () => {
    additionalInformationRepository = new AdditionalInformationRepositoryMock();
    additionalInformationController =
      new AdditionalInformationController(additionalInformationRepository);
  });

  it('should create new register of additional information to person', async () => {

    const newAdditionalInformation = {
      fatherName: faker.name.firstName(),
      motherName: faker.name.firstName(2),
      civilStatus: faker.random.number(1),
      dependents: faker.random.number(1),
      person: faker.random.number(1),
    };

    const additionalInformation =
      await additionalInformationController.create(newAdditionalInformation);

    expect(additionalInformation).toHaveProperty('id');
  });

  it('should return additional information of a person', async () => {
    const query: GetAdditionalInformationQuery = {
      person: faker.random.number(1),
    };
    // Get information.
    const additionalInformation = await additionalInformationController.show(query);

    expect(additionalInformation).toHaveProperty('id');
  });

  it('should update additional information to a person ', async (done) => {
    const additionalInformation: UpdateAdditionalInformationCommand = {
      fatherName: faker.name.firstName(),
      motherName: faker.name.firstName(2),
      civilStatus: faker.random.number(1),
      dependents: faker.random.number(1),
      person: faker.random.number(1),
    };

    const newAdditionalInformation =
      await additionalInformationController.update(additionalInformation);

    expect(newAdditionalInformation).toHaveProperty('id');
    done();
  });
});
