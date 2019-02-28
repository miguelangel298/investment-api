import { define } from '../seeders/cli/Seed';
import UserEntity from '../entities/UserEntity';
import { FactoryStatic } from './interfaces/Factory';
import UserStatusEntity from '../entities/UserStatusEntity';
import PersonEntity from '../entities/PersonEntity';

define(UserEntity, async (faker: Faker.FakerStatic, factory: FactoryStatic):
  Promise<UserEntity> => {
  const user = new UserEntity();
  user.username = faker.internet.userName(faker.name.findName(), faker.name.lastName());
  user.password = faker.internet.password(8, true);
  user.createdAt = new Date();
  user.userStatus = await factory.get(UserStatusEntity).create();
  user.person = await factory.get(PersonEntity).create();
  return user;
});
