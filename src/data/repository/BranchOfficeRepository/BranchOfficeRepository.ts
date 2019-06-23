import { EntityRepository, Repository } from 'typeorm';
import BranchOfficeEntity from '../../entities/BranchOfficeEntity';
import IBranchOfficeRepository from './IBranchOfficeRepository';

@EntityRepository(BranchOfficeEntity)
export default class BranchOfficeRepository extends Repository<BranchOfficeEntity>
  implements IBranchOfficeRepository { }
