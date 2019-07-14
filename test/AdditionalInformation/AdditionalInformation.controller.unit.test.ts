// tslint:disable-next-line:max-line-length
import AdditionalInformationRepositoryMock from
    '../../src/data/repository/AdditionalInformationRepository/AdditionalInformationRepositoryMock';
import AdditionalInformationController from
    '../../src/presentation/controllers/AdditionalInformationController';
import * as faker from 'faker';

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

});
