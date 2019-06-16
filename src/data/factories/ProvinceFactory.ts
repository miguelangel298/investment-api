import { define } from '../seeders/cli/Seed';
import ProvinceEntity from '../entities/ProvinceEntity';
import { FactoryStatic } from './interfaces/Factory';
import RepositoryModule from '../../application/modules/RepositoryModule';
import CountryEntity from '../entities/CountryEntity';

define(ProvinceEntity, async (faker: Faker.FakerStatic,
                              factory: FactoryStatic): Promise<ProvinceEntity> => {

  // Get country
  const countryFind = await RepositoryModule.countryRepository().findOne();
  const country = countryFind ? countryFind : await factory.get(CountryEntity).create();

  const province = new ProvinceEntity();
  province.name = faker.name.jobArea();
  province.code = faker.random.alphaNumeric(5);
  province.country = country;
  return province;
});
