import GenderRepositoryMock from '../../src/data/repository/GenderRepository/GenderRepositoryMock';
import GenderController from '../../src/presentation/controllers/GenderController';

let genderRepository: GenderRepositoryMock;
let genderController: GenderController;

describe('Gender controller, query and command', async () => {

  beforeAll(async () => {
    genderRepository = new GenderRepositoryMock();
    genderController = new GenderController(genderRepository);
  });

  it('should return genders list', async () => {
    // Getting genders
    const countries = await genderController.index();

    expect(countries.length).toBeGreaterThan(1);
    expect(countries[0]).toHaveProperty('id');
  });

});
