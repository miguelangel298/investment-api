import { define } from '../seeders/cli/Seed';
import UserEntity from '../entities/UserEntity';
import { FactoryStatic } from './interfaces/Factory';
import UserStatusEntity from '../entities/UserStatusEntity';
import PersonEntity from '../entities/PersonEntity';

const data = {
  username: 'admin',
  password: '123456',
};

define(UserEntity, async (faker: Faker.FakerStatic, factory: FactoryStatic):
  Promise<UserEntity> => {
  const user = new UserEntity();
  user.username = data.username;
  user.createdAt = new Date();
  user.userStatus = await factory.get(UserStatusEntity).create();
  user.person = await factory.get(PersonEntity).create();
  await user.setPassword(data.password);
  return user;
});
