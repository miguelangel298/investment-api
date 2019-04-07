import ExampleRepository from '../../data/repository/ExampleRepository';
import UserRepository from '../../data/repository/UserRepository/UserRepository';
import { getCustomRepository } from 'typeorm';
import GroupRepository from '../../data/repository/GroupRepository';

export default class RepositoryModule {

  static getExampleRepository(): ExampleRepository {
    return getCustomRepository(ExampleRepository);
  }

  static userRepository(): UserRepository {
    return getCustomRepository(UserRepository);
  }

  static groupRepository(): GroupRepository {
    return getCustomRepository(GroupRepository);
  }
}
