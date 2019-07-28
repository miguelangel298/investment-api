import UserController from '../../presentation/controllers/UserController';
import RepositoryModule from './RepositoryModule';
import AuthController from '../../presentation/controllers/AuthController';
import PersonController from '../../presentation/controllers/PersonController';
import CountryController from '../../presentation/controllers/CountryController';
import GenderController from '../../presentation/controllers/GenderController';
import BranchOfficeController from '../../presentation/controllers/BranchOfficeController';
import CivilStatusController from '../../presentation/controllers/CivilStatusController';
import ProvinceController from '../../presentation/controllers/ProvinceController';
import MunicipalityController from '../../presentation/controllers/MunicipalityController';
import PersonJobController from '../../presentation/controllers/PersonJobController';
import AdditionalInformationController
  from '../../presentation/controllers/AdditionalInformationController';
import PersonAddressController from '../../presentation/controllers/PersonAddressController';

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
    return new BranchOfficeController(RepositoryModule.branchOfficeRepository());
  }

  static getCivilStatusController(): CivilStatusController {
    return new CivilStatusController(RepositoryModule.civilStatusRepository());
  }

  static getProvinceController(): ProvinceController {
    return new ProvinceController(RepositoryModule.provinceRepository());
  }

  static getMunicipalityController(): MunicipalityController {
    return new MunicipalityController(RepositoryModule.municipalityRepository());
  }

  static getPersonJobController(): PersonJobController {
    return new PersonJobController(RepositoryModule.personJobRepository());
  }

  static getAdditionalInformationController(): AdditionalInformationController {
    return new AdditionalInformationController(RepositoryModule.additionalInformationRepository());
  }

  static getPersonAddressController(): PersonAddressController {
    return new PersonAddressController(RepositoryModule.personAddressRepository());
  }
}
