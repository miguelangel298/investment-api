import ICountryRepository from '../../data/repository/CountryRepository/ICountryRepository';
import CountryDTO from '../../domain/DTOs/CountryDTO';
import { buildRawError } from '../../application/config/ErrorCode';
import { GetCountriesQueryHandler } from '../../domain/queries/GetCountriesQuery';

export default class CountryController {

  constructor(protected countryRepository: ICountryRepository) { }

  /**
   * Get the list of countries.
   * @returns { CountryDTO[] }
   */
  async index(): Promise<CountryDTO[]> {
    try {
      // Instance of query
      const getCountriesQueryHandler = new
      GetCountriesQueryHandler(this.countryRepository);

      return await getCountriesQueryHandler.handle();
    } catch (e) {
      throw buildRawError(e);
    }
  }

}
