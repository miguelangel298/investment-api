import { define } from '../seeders/cli/Seed';
import UserPermissionGroupEntity from '../entities/UserPermissionGroupEntity';
import RepositoryModule from '../../application/modules/RepositoryModule';
import { FactoryStatic } from './interfaces/Factory';
import UserEntity from '../entities/UserEntity';
import GroupEntity from '../entities/GroupEntity';

define(UserPermissionGroupEntity, async (faker: Faker.FakerStatic, factory: FactoryStatic):
  Promise<UserPermissionGroupEntity> => {

  const entity = new UserPermissionGroupEntity();
  // Get user
  const userFind = await RepositoryModule.userRepository().findOne();
  const user = userFind ? userFind : await factory.get(UserEntity).create();

  // Get group
  const groupFind = await RepositoryModule.groupRepository().findOne();
  const group = groupFind ? groupFind : await factory.get(GroupEntity).create();
  entity.user = user;
  entity.createdAt = new Date();
  entity.createdBy = user;
  entity.group = group;
  return  entity;
});
