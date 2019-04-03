import RepositoryModule from '../../application/modules/RepositoryModule';
import { GetExampleByIdQueryHandler } from '../../domain/queries/GetExampleByIdQuery';
import { GetUserLoginQueryHandler } from '../../domain/queries/GetUserLoginQuery';

export default class QueryModule {

  static getUserByIdQueryHandle () {
    return new GetExampleByIdQueryHandler(RepositoryModule.getExampleRepository());
  }

  static getUserLoginQueryHandle () {
    return new GetUserLoginQueryHandler(RepositoryModule.userRepository());
  }
}
