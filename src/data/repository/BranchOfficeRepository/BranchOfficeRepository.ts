import { Repository } from 'typeorm';
import BranchOfficeEntity from '../../entities/BranchOfficeEntity';
import IBranchOfficeRepository from './IBranchOfficeRepository';

export default class BranchOfficeRepository extends Repository<BranchOfficeEntity>
  implements IBranchOfficeRepository { }
