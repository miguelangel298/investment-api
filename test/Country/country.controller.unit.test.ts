import CountryRepositoryMock
  from '../../src/data/repository/CountryRepository/CountryRepositoryMock';
import CountryController from '../../src/presentation/controllers/CountryController';

let countryRepository: CountryRepositoryMock;
let countryController: CountryController;

describe('Country controller, query and command', async () => {

  beforeAll(async () => {
    countryRepository = new CountryRepositoryMock();
    countryController = new CountryController(countryRepository);
  });

  it('should return countries list', async () => {
    // Getting countries
    const countries = await countryController.index();

    expect(countries.length).toBeGreaterThan(1);
    countries.forEach((country) => {
      expect(country).toHaveProperty('id');
    });
  });

});
