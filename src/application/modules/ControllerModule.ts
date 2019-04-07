import UserController from '../../presentation/controllers/UserController';
import RepositoryModule from './RepositoryModule';

export default class ControllerModule {

  static getUserController(): UserController {
    return new UserController(RepositoryModule.userRepository());
  }
}
