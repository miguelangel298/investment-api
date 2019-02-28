import { define } from '../seeders/cli/Seed';
import RoleEntity from '../entities/RoleEntity';

define(RoleEntity, async (faker: Faker.FakerStatic): Promise<RoleEntity> => {
  const role = new RoleEntity();
  role.name = faker.name.jobTitle();
  role.description = faker.lorem.words(1);
  return role;
});
