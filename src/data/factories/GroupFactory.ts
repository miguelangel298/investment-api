import { define } from '../seeders/cli/Seed';
import GroupEntity from '../entities/GroupEntity';

define(GroupEntity, async (faker: Faker.FakerStatic)
  : Promise<GroupEntity> => {
  const group = new GroupEntity();
  group.createdAt = new Date();
  group.name = faker.name.jobArea();
  group.description = faker.lorem.words(1);
  return group;
});
