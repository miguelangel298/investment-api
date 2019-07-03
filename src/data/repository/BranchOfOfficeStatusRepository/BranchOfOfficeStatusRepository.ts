import { EntityRepository, Repository } from 'typeorm';
import BranchOfOfficeStatusEntity from '../../entities/BranchOfOfficeStatusEntity';
import IBranchOfOfficeStatusRepository from './IBranchOfOfficeStatusRepository';

@EntityRepository(BranchOfOfficeStatusEntity)
export default class BranchOfOfficeStatusRepository extends Repository<BranchOfOfficeStatusEntity>
  implements IBranchOfOfficeStatusRepository {

}
