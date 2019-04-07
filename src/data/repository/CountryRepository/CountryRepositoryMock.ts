import ICountryRepository from './ICountryRepository';
import CountryEntity from '../../entities/CountryEntity';

export default class CountryRepositoryMock implements ICountryRepository {

  public static entity: CountryEntity[] = [];
}
