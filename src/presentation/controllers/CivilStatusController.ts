import ICivilStatusRepository
  from '../../data/repository/CivilStatusRepository/ICivilStatusRepository';
import CivilStatusDTO from '../../domain/DTOs/CivilStatusDTO';
import { buildRawError } from '../../application/config/ErrorCode';
import { GetCivilStatusQueryHandler } from '../../domain/queries/GetCivilStatusQuery';

export default class CivilStatusController {

  constructor(protected civilStatusRepository: ICivilStatusRepository) { }

  /**
   * Get the list of civil status.
   * @returns { CivilStatusDTO[] }
   */
  async index(): Promise<CivilStatusDTO[]> {
    try {
      // Instance query
      const getCivilStatusQueryHandler = new GetCivilStatusQueryHandler(this.civilStatusRepository);
      return await getCivilStatusQueryHandler.handle();
    } catch (e) {
      throw buildRawError(e);
    }
  }
}
