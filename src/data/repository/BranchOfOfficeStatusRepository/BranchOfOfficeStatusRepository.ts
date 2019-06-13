import { Repository } from 'typeorm';
import BranchOfOfficeStatusEntity from '../../entities/BranchOfOfficeStatusEntity';
import IBranchOfOfficeStatusRepository from './IBranchOfOfficeStatusRepository';

export default class BranchOfOfficeStatusRepository extends Repository<BranchOfOfficeStatusEntity>
  implements IBranchOfOfficeStatusRepository {

}
