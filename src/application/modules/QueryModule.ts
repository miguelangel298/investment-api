import RepositoryModule from '../../application/modules/RepositoryModule';
import { GetExampleByIdQueryHandler } from '../../domain/queries/GetExampleByIdQuery';

export default class QueryModule {

  static getUserByIdQueryHandle () {
    return new GetExampleByIdQueryHandler(RepositoryModule.getExampleRepository());
  }
}
