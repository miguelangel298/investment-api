import RepositoryModule from '../../application/modules/RepositoryModule';
import { UpdateExampleCommandHandler } from '../../domain/command/UpdateExampleCommand';

export default class CommandModule {
  constructor() {}

  static getUpdateExampleCommandHandler(): UpdateExampleCommandHandler {
    return new UpdateExampleCommandHandler(RepositoryModule.getExampleRepository());
  }
}
