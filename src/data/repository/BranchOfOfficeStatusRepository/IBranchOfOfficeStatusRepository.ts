import { FindConditions, FindOneOptions } from 'typeorm';
import BranchOfOfficeStatusEntity from '../../entities/BranchOfOfficeStatusEntity';

export default interface IBranchOfOfficeStatusRepository {

  findOne(conditions?: FindConditions<BranchOfOfficeStatusEntity>, options?:
    FindOneOptions<BranchOfOfficeStatusEntity>): Promise<BranchOfOfficeStatusEntity | undefined>;

}
