import { define } from '../seeders/cli/Seed';
import GenderEntity from '../entities/GenderEntity';

define(GenderEntity, async (faker: Faker.FakerStatic): Promise<GenderEntity> => {
  const gender = new GenderEntity();
  gender.name = faker.name.lastName(1);
  gender.code = faker.random.alphaNumeric(2);
  return gender;
});
