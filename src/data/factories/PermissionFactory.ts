import { define } from '../seeders/cli/Seed';
import PermissionEntity, { permissionUser } from '../entities/PermissionEntity';
import { FactoryStatic } from './interfaces/Factory';

define(PermissionEntity, async (faker: Faker.FakerStatic, factory: FactoryStatic):
  Promise<PermissionEntity> => {
  const permission = new PermissionEntity();
  permission.name = permissionUser.MANAGE_PERSONS;
  permission.description = faker.name.jobDescriptor();
  permission.code = permissionUser.MANAGE_PERSONS;
  return permission;
});
