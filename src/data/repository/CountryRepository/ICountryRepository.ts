import { FindConditions } from 'typeorm';
import CountryEntity from '../../entities/CountryEntity';

export default interface ICountryRepository  {

  find(conditions?: FindConditions<CountryEntity>): Promise<CountryEntity[]>;
}
