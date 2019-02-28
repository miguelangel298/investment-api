import { define } from '../seeders/cli/Seed';
import UserStatusEntity from '../entities/UserStatusEntity';

define(UserStatusEntity, async (faker: Faker.FakerStatic): Promise<UserStatusEntity> => {
  const userStatus = new UserStatusEntity();
  userStatus.name = faker.random.alphaNumeric(4);
  userStatus.description = faker.lorem.words(1);
  return userStatus;
});
