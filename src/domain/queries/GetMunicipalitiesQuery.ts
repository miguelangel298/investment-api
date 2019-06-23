import { IQueryHandler } from './base/IQuery';
import MunicipalityDTO from '../DTOs/MunicipalityDTO';
import IMunicipalityRepository
  from '../../data/repository/MunicipalityRepository/IMunicipalityRepository';

/**
 * Return the list of municipalities.
 * @returns { MunicipalityDTO[] }
 */
export class GetMunicipalitiesQueryHandler implements IQueryHandler<MunicipalityDTO[]> {
  constructor(protected municipalityRepository: IMunicipalityRepository) { }

  async handle(): Promise<MunicipalityDTO[]> {
    const municipalities = await this.municipalityRepository.find({});
    return municipalities.map(municipality => new MunicipalityDTO(municipality));
  }
}
