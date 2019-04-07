import { define } from '../seeders/cli/Seed';
import GroupEntity from '../entities/GroupEntity';
import RepositoryModule from '../../application/modules/RepositoryModule';
import UserEntity from '../entities/UserEntity';
import { FactoryStatic } from './interfaces/Factory';

define(GroupEntity, async (faker: Faker.FakerStatic, factory: FactoryStatic)
  : Promise<GroupEntity> => {

  // Get user
  const userFind = await RepositoryModule.userRepository().findOne();
  const user = userFind ? userFind : await factory.get(UserEntity).create();

  const group = new GroupEntity();
  group.createdAt = new Date();
  group.name = faker.name.jobArea();
  group.description = faker.lorem.words(1);
  group.createdBy = user;
  return group;
});
