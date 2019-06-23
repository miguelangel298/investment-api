import IBranchOfficeRepository
  from '../../data/repository/BranchOfficeRepository/IBranchOfficeRepository';
import BranchOfficeDTO from '../../domain/DTOs/BranchOfficeDTO';
import { buildRawError } from '../../application/config/ErrorCode';
import { GetBranchOfficeQueryHandler } from '../../domain/queries/GetBranchOfficesQuery';

export default class BranchOfficeController {

  constructor(protected branchOfficeRepository: IBranchOfficeRepository) { }

  /**
   * Get the list of branch offices.
   * @returns { BranchOfficeDTO[] }
   */
  async index(): Promise<BranchOfficeDTO[]> {
    try {
      // Instance of query
      const getBranchOfficesQuery = new GetBranchOfficeQueryHandler(this.branchOfficeRepository);
      return await getBranchOfficesQuery.handle();
    } catch (e) {
      throw buildRawError(e);
    }
  }
}
