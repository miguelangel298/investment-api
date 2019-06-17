import { define } from '../seeders/cli/Seed';
import CivilStatusEntity from '../entities/CivilStatusEntity';

define(CivilStatusEntity, async (faker: Faker.FakerStatic): Promise<CivilStatusEntity> => {

  // Create civil status
  const civilStatus = new CivilStatusEntity();
  civilStatus.status = faker.name.title();
  return civilStatus;

});
