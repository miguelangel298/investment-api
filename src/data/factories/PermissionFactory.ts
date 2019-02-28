import { define } from '../seeders/cli/Seed';
import PermissionEntity from '../entities/PermissionEntity';

define(PermissionEntity, async (faker: Faker.FakerStatic): Promise<PermissionEntity> => {
  const permission = new PermissionEntity();
  permission.name = faker.name.jobTitle();
  permission.description = faker.name.jobDescriptor();
  permission.code = faker.random.alphaNumeric(5);
  return permission;
});
