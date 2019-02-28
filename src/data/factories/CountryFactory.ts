import { define } from '../seeders/cli/Seed';
import CountryEntity from '../entities/CountryEntity';

define(CountryEntity, async (faker: Faker.FakerStatic): Promise<CountryEntity> => {
  const country = new CountryEntity();
  country.code = faker.random.alphaNumeric(2);
  country.name = faker.random.alphaNumeric(3);
  return country;
});
