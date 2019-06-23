import UserController from '../../presentation/controllers/UserController';
import RepositoryModule from './RepositoryModule';
import AuthController from '../../presentation/controllers/AuthController';
import PersonController from '../../presentation/controllers/PersonController';
import CountryController from '../../presentation/controllers/CountryController';
import GenderController from '../../presentation/controllers/GenderController';
import BranchOfficeController from '../../presentation/controllers/BranchOfficeController';

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

  static getCountryController(): CountryController {
    return new CountryController(RepositoryModule.countryRepository());
  }

  static getGenderController(): GenderController {
    return new GenderController(RepositoryModule.genderRepository());
  }

  static getBranchOfficeController(): BranchOfficeController {
    return new BranchOfficeController(RepositoryModule.branchOfficeReposity());
  }
}
