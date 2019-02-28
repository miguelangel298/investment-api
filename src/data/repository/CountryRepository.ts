import { EntityRepository, Repository } from 'typeorm';
import CountryEntity from '../entities/CountryEntity';

@EntityRepository(CountryEntity)
export default class CountryRepository extends Repository<CountryEntity> { }
