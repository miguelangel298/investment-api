import ExampleRepository from '../../data/repository/ExampleRepository';

export default class RepositoryModule {

  static getExampleRepository(): ExampleRepository {
    return new ExampleRepository();
  }
}
