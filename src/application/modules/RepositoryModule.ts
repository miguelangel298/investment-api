import UserRepository from '../../data/repository/UserRepository/UserRepository';
import { getCustomRepository } from 'typeorm';
import GroupRepository from '../../data/repository/GroupRepository/GroupRepository';
import PersonRepository from '../../data/repository/PersonRepository/PersonRepository';
import CountryRepository from '../../data/repository/CountryRepository/CountryRepository';
import ProvinceRepository from '../../data/repository/ProvinceRepository/ProvinceRepository';
import ContactTypeRepository
  from '../../data/repository/ContactTypeRepository/ContactTypeRepository';
import CivilStatusRepository
  from '../../data/repository/CivilStatusRepository/CivilStatusRepository';
import GenderRepository from '../../data/repository/GenderRepository/GenderRepository';

export default class RepositoryModule {

  static userRepository(): UserRepository {
    return getCustomRepository(UserRepository);
  }

  static personRepository(): PersonRepository {
    return getCustomRepository(PersonRepository);
  }

  static groupRepository(): GroupRepository {
    return getCustomRepository(GroupRepository);
  }

  static countryRepository(): CountryRepository {
    return getCustomRepository(CountryRepository);
  }

  static provinceRepository(): ProvinceRepository {
    return getCustomRepository(ProvinceRepository);
  }

  static contactTypeRepository(): ContactTypeRepository {
    return getCustomRepository(ContactTypeRepository);
  }

  static civilStatusRepository(): CivilStatusRepository {
    return getCustomRepository(CivilStatusRepository);
  }

  static genderRepository(): GenderRepository {
    return getCustomRepository(GenderRepository);
  }

}
