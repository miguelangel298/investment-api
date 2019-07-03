import { define } from '../seeders/cli/Seed';
import { FactoryStatic } from './interfaces/Factory';
import PermissionGroupEntity from '../entities/PermissionGroupEntity';
import PermissionEntity from '../entities/PermissionEntity';
import RepositoryModule from '../../application/modules/RepositoryModule';
import GroupEntity from '../entities/GroupEntity';
import UserEntity from '../entities/UserEntity';

define(PermissionGroupEntity, async (fake: Faker.FakerStatic, factory: FactoryStatic):
  Promise<PermissionGroupEntity> => {

  // Get group
  const groupFind = await RepositoryModule.groupRepository().findOne();
  const group = groupFind ? groupFind : await factory.get(GroupEntity).create();

  // Get user
  const userFind = await RepositoryModule.userRepository().findOne();
  const user = userFind ? userFind : await factory.get(UserEntity).create();

  // Get user
  const permissionFind = await RepositoryModule.permissionRepository().findOne();
  const permission = permissionFind ? permissionFind : await factory.get(PermissionEntity).create();

  const entity = new PermissionGroupEntity();

  entity.permission = permission;
  entity.group = group;
  entity.createdAt = new Date();
  entity.createdBy = user;
  return entity;
});
