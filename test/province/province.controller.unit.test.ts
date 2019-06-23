import ProvinceRepositoryMock
  from '../../src/data/repository/ProvinceRepository/ProvinceRepositoryMock';
import ProvinceController from '../../src/presentation/controllers/ProvinceController';

let provinceRepository: ProvinceRepositoryMock;
let provinceController: ProvinceController;

describe('Province controller, query and command', async () => {

  beforeAll(async () => {
    provinceRepository = new ProvinceRepositoryMock();
    provinceController = new ProvinceController(provinceRepository);
  });

  it('should return provinces list', async () => {
    // Getting provinces
    const provinces = await provinceController.index();

    expect(provinces.length).toBeGreaterThan(1);
    expect(provinces[0]).toHaveProperty('id');
  });

});
