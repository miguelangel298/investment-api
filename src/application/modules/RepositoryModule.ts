import ExampleRepository from '../../data/repository/ExampleRepository';
import UserRepository from '../../data/repository/UserRepository/UserRepository';

export default class RepositoryModule {

  static getExampleRepository(): ExampleRepository {
    return new ExampleRepository();
  }

  static userRepository(): UserRepository {
    return new UserRepository();
  }
}
