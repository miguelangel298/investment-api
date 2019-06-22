import { IQueryHandler } from './base/IQuery';
import IBranchOfficeRepository
  from '../../data/repository/BranchOfficeRepository/IBranchOfficeRepository';
import BranchOfficeDTO from '../DTOs/BranchOfficeDTO';

/**
 * Get the list of branch offices.
 * @returns { BranchOfficeDTO[] }
 */
export class GetBranchOfficeQueryHandler implements IQueryHandler<BranchOfficeDTO[]> {

  constructor(protected branchOfficeRepository: IBranchOfficeRepository) { }

  async handle(): Promise<BranchOfficeDTO[]> {
    const branchOffices = await this.branchOfficeRepository.find({});
    return branchOffices.map(branchOffice => new BranchOfficeDTO(branchOffice));
  }

}
