import { define } from '../seeders/cli/Seed';
import NationalityEntity from '../entities/NationalityEntity';
import { FactoryStatic } from './interfaces/Factory';
import CountryEntity from '../entities/CountryEntity';
import RepositoryModule from '../../application/modules/RepositoryModule';

define(NationalityEntity, async (faker: Faker.FakerStatic, factory: FactoryStatic)
  : Promise<NationalityEntity> => {

  // Get country
  const countryFind = await RepositoryModule.countryRepository().findOne();
  const country = countryFind ? countryFind : await factory.get(CountryEntity).create();

  const nationality = new NationalityEntity();
  nationality.name = faker.address.county();
  nationality.countryBy = country;
  return nationality;
});
