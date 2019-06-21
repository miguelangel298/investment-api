import { IQueryHandler } from './base/IQuery';
import CountryDTO from '../DTOs/CountryDTO';
import ICountryRepository from '../../data/repository/CountryRepository/ICountryRepository';

/**
 * Get the list of countries.
 * @returns { CountryDTO[] }
 */
export  class GetCountriesQueryHandler implements IQueryHandler<CountryDTO[]> {

  constructor(protected countryRepository: ICountryRepository) { }

  async handle(): Promise<CountryDTO[]> {
    const countries = await this.countryRepository.find({});
    return countries.map(country => new CountryDTO(country));
  }

}
