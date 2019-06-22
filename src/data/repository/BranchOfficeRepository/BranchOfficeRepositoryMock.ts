import IBranchOfficeRepository from './IBranchOfficeRepository';
import BranchOfficeEntity from '../../entities/BranchOfficeEntity';
import { FindConditions, FindOneOptions } from 'typeorm';

export default class BranchOfficeRepositoryMock implements
  IBranchOfficeRepository {

  public static entities: BranchOfficeEntity[] = [{
    id: 1,
    name: 'admin',
  } as BranchOfficeEntity, {
    id: 2,
    name: 'La Sirena',
  } as BranchOfficeEntity,
  ];

  async findOne(conditions?: FindConditions<BranchOfficeEntity>, options?:
    FindOneOptions<BranchOfficeEntity>): Promise<BranchOfficeEntity | undefined> {
    return BranchOfficeRepositoryMock.entities[0];
  }

  async find(conditions?: FindConditions<BranchOfficeEntity>): Promise<BranchOfficeEntity[]> {
    return BranchOfficeRepositoryMock.entities;
  }

}
