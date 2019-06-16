import ICompanyRepository from './ICompanyRepository';
import CompanyEntity from '../../entities/CompanyEntity';
import { FindConditions, FindOneOptions } from 'typeorm';

export default class CompanyRepositoryMock implements ICompanyRepository {

  public static entities: CompanyEntity[] = [{
    id: 1,
    name: 'admin',
  } as CompanyEntity,
  ];

  async findOne(conditions?: FindConditions<CompanyEntity>, options?:
    FindOneOptions<CompanyEntity>): Promise<CompanyEntity | undefined> {
    return CompanyRepositoryMock.entities[0];
  }
}
