import ExampleRepository from '../../data/repository/ExampleRepository';
import UserRepository from '../../data/repository/UserRepository/UserRepository';
import { getCustomRepository } from 'typeorm';

export default class RepositoryModule {

  static getExampleRepository(): ExampleRepository {
    return getCustomRepository(ExampleRepository);
  }

  static userRepository(): UserRepository {
    return getCustomRepository(UserRepository);
  }
}
