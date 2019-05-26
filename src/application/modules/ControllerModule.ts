import UserController from '../../presentation/controllers/UserController';
import RepositoryModule from './RepositoryModule';
import AuthController from '../../presentation/controllers/AuthController';
import PersonController from '../../presentation/controllers/PersonController';

export default class ControllerModule {

  static getUserController(): UserController {
    return new UserController(RepositoryModule.userRepository());
  }

  static getAuthController(): AuthController {
    return new AuthController(RepositoryModule.userRepository());
  }

  static  getPersonController(): PersonController {
    return new PersonController(RepositoryModule.personRepository());
  }
}
