import BranchOfficeRepositoryMock
  from '../../src/data/repository/BranchOfficeRepository/BranchOfficeRepositoryMock';
import BranchOfficeController from '../../src/presentation/controllers/BranchOfficeController';

let branchOfficeRepository: BranchOfficeRepositoryMock;
let branchOfficeController: BranchOfficeController;

describe('Branch office controller, query and command', async () => {

  beforeAll(async () => {
    branchOfficeRepository = new BranchOfficeRepositoryMock();
    branchOfficeController = new BranchOfficeController(branchOfficeRepository);
  });

  it('should return branch offices', async () => {
    // Getting branch offices
    const branchOffices = await branchOfficeController.index();

    expect(branchOffices.length).toBeGreaterThan(1);
    expect(branchOffices[0]).toHaveProperty('id');
  });

});
