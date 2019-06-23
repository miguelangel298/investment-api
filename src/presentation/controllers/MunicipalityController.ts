import IMunicipalityRepository from '../../data/repository/MunicipalityRepository/IMunicipalityRepository';
import MunicipalityDTO from '../../domain/DTOs/MunicipalityDTO';
import { buildRawError } from '../../application/config/ErrorCode';
import { GetMunicipalitiesQueryHandler } from '../../domain/queries/GetMunicipalitiesQuery';

export default class MunicipalityController {
  constructor(protected municipalityRepository: IMunicipalityRepository) { }

  /**
   * Return the list of municipalities.
   * @returns { MunicipalityDTO[] }
   */
  async index(): Promise<MunicipalityDTO[]> {
    try {
      // Instance of query
      const getMunicipalitiesQueryHandler =
        new GetMunicipalitiesQueryHandler(this.municipalityRepository);

      return await getMunicipalitiesQueryHandler.handle();
    } catch (e) {
      throw buildRawError(e);
    }
  }
}
