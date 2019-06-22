import IGenderRepository from '../../data/repository/GenderRepository/IGenderRepository';
import GenderDTO from '../../domain/DTOs/GenderDTO';
import { buildRawError } from '../../application/config/ErrorCode';
import { GetGendersQueryHandler } from '../../domain/queries/GetGendersQuery';

export default class GenderController {

  constructor(protected genderRepository: IGenderRepository) { }

  /**
   * Get the list of genders.
   * @returns { GenderDTO[] }
   */
  async index(): Promise<GenderDTO[]> {
    try {
      // Instance of query
      const getGendersQueryHandler = new GetGendersQueryHandler(this.genderRepository);
      return await getGendersQueryHandler.handle();
    } catch (e) {
      throw buildRawError(e);
    }
  }
}
