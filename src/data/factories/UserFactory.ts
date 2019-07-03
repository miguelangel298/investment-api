import { define } from '../seeders/cli/Seed';
import UserEntity from '../entities/UserEntity';
import { FactoryStatic } from './interfaces/Factory';
import UserStatusEntity from '../entities/UserStatusEntity';
import PersonEntity from '../entities/PersonEntity';
import RoleEntity from '../entities/RoleEntity';
import RepositoryModule from '../../application/modules/RepositoryModule';

const data = {
  username: 'admin',
  password: '123456',
};

define(UserEntity, async (faker: Faker.FakerStatic, factory: FactoryStatic):
  Promise<UserEntity> => {

  // Get person
  const personFind = await RepositoryModule.personRepository().findOne();
  const person = personFind ? personFind : await factory.get(PersonEntity).create();

  const user = new UserEntity();
  user.username = data.username;
  user.createdAt = new Date();
  user.userStatus = await factory.get(UserStatusEntity).create();
  user.person = person;
  user.role = await factory.get(RoleEntity).create();
  await user.setPassword(data.password);
  return user;
});
