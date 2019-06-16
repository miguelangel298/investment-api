import IBranchOfOfficeStatusRepository from './IBranchOfOfficeStatusRepository';
import { FindConditions, FindOneOptions } from 'typeorm';
import BranchOfOfficeStatusEntity from '../../entities/BranchOfOfficeStatusEntity';

export default class BranchOfOfficeStatusRepositoryMock implements
  IBranchOfOfficeStatusRepository {

  public static entities: BranchOfOfficeStatusEntity[] = [{
    id: 1,
    name: 'admin',
  } as BranchOfOfficeStatusEntity,
  ];

  async findOne(conditions?: FindConditions<BranchOfOfficeStatusEntity>, options?:
    FindOneOptions<BranchOfOfficeStatusEntity>): Promise<BranchOfOfficeStatusEntity | undefined> {
    return BranchOfOfficeStatusRepositoryMock.entities[0];
  }

}
