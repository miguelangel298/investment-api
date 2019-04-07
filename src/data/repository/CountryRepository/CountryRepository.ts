import { EntityRepository, Repository } from 'typeorm';
import CountryEntity from '../../entities/CountryEntity';
import ICountryRepository from './ICountryRepository';

@EntityRepository(CountryEntity)
export default class CountryRepository extends Repository<CountryEntity>
  implements ICountryRepository { }
