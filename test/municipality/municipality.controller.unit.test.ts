import MunicipalityRepositoryMock
  from '../../src/data/repository/MunicipalityRepository/MunicipalityRepositoryMock';
import MunicipalityController from '../../src/presentation/controllers/MunicipalityController';

let municipalityRepository: MunicipalityRepositoryMock;
let municipalityController: MunicipalityController;

describe('Municipality controller, query and command', async () => {

  beforeAll(async () => {
    municipalityRepository = new MunicipalityRepositoryMock();
    municipalityController = new MunicipalityController(municipalityRepository);
  });

  it('should return municipalities list', async () => {
    // Getting municipalities
    const municipalities = await municipalityController.index();

    expect(municipalities.length).toBeGreaterThan(1);
    expect(municipalities[0]).toHaveProperty('id');
  });

});
