import CivilStatusRepositoryMock
  from '../../src/data/repository/CivilStatusRepository/CivilStatusRepositoryMock';
import CivilStatusController from '../../src/presentation/controllers/CivilStatusController';

let civilStatusRepository: CivilStatusRepositoryMock;
let civilStatusController: CivilStatusController;

describe('Civil status controller, query and command', async () => {

  beforeAll(async () => {
    civilStatusRepository = new CivilStatusRepositoryMock();
    civilStatusController = new CivilStatusController(civilStatusRepository);
  });

  it('should return civil status list', async () => {
    // Getting civil status
    const civilStatusList = await civilStatusController.index();

    expect(civilStatusList.length).toBeGreaterThan(1);
    expect(civilStatusList[0]).toHaveProperty('id');
  });

});
