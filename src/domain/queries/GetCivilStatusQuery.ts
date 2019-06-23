import { IQueryHandler } from './base/IQuery';
import CivilStatusDTO from '../DTOs/CivilStatusDTO';
import ICivilStatusRepository
  from '../../data/repository/CivilStatusRepository/ICivilStatusRepository';

/**
 * Get the list of civil status.
 * @returns { CivilStatusDTO[] }
 */
export class GetCivilStatusQueryHandler implements IQueryHandler<CivilStatusDTO[]> {

  constructor(protected civilStatusRepository: ICivilStatusRepository) { }

  async handle(): Promise<CivilStatusDTO[]> {
    const civilStatusList = await this.civilStatusRepository.find({});
    return civilStatusList.map(status => new CivilStatusDTO(status));
  }

}
