import { define } from '../seeders/cli/Seed';
import NationalityEntity from '../entities/NationalityEntity';
import { FactoryStatic } from './interfaces/Factory';
import CountryEntity from '../entities/CountryEntity';

define(NationalityEntity, async (faker: Faker.FakerStatic, factory: FactoryStatic)
  : Promise<NationalityEntity> => {
  const nationality = new NationalityEntity();
  nationality.name = faker.address.county();
  nationality.countryBy = await factory.get(CountryEntity).create();
  return nationality;
});
