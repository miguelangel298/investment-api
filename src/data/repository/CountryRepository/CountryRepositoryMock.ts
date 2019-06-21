import ICountryRepository from './ICountryRepository';
import CountryEntity from '../../entities/CountryEntity';
import { FindConditions } from 'typeorm';

export default class CountryRepositoryMock implements ICountryRepository {

  public static entity: CountryEntity[] = [{
    id: 1,
    name: 'Republica Dominicana',
  } as CountryEntity, {
    id: 2,
    name: 'Republica Dominicana',
  } as CountryEntity,
  ];

  async find(conditions ? : FindConditions<CountryEntity>): Promise <CountryEntity[]> {
    return CountryRepositoryMock.entity;
  }
}
