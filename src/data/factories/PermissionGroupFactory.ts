import { define } from '../seeders/cli/Seed';
import { FactoryStatic } from './interfaces/Factory';
import PermissionGroupEntity from '../entities/PermissionGroupEntity';
import PermissionEntity from '../entities/PermissionEntity';
import RepositoryModule from '../../application/modules/RepositoryModule';
import GroupEntity from '../entities/GroupEntity';
import UserEntity from '../entities/UserEntity';

define(PermissionGroupEntity, async (fake: Faker.FakerStatic, factory: FactoryStatic):
  Promise<PermissionGroupEntity> => {
  const entity = new PermissionGroupEntity();

  // Get group
  const groupFind = await RepositoryModule.groupRepository().findOne();
  const group = groupFind ? groupFind : await factory.get(GroupEntity).create();

  // Get user
  const userFind = await RepositoryModule.userRepository().findOne();
  const user = userFind ? userFind : await factory.get(UserEntity).create();

  entity.permission = await factory.get(PermissionEntity).create();
  entity.group = group;
  entity.createdAt = new Date();
  entity.createdBy = user;
  return entity;
});
