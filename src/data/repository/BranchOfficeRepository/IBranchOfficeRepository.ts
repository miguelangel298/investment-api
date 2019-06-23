import { FindConditions, FindOneOptions } from 'typeorm';
import BranchOfficeEntity from '../../entities/BranchOfficeEntity';

export default interface IBranchOfficeRepository {

  findOne(conditions?: FindConditions<BranchOfficeEntity>, options?:
    FindOneOptions<BranchOfficeEntity>): Promise<BranchOfficeEntity | undefined>;

  find(conditions?: FindConditions<BranchOfficeEntity>): Promise<BranchOfficeEntity[]>;

}
