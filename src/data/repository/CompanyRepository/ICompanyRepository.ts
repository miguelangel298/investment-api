import { FindConditions, FindOneOptions } from 'typeorm';
import CompanyEntity from '../../entities/CompanyEntity';

export default interface ICompanyRepository {

  findOne(conditions?: FindConditions<CompanyEntity>, options?:
    FindOneOptions<CompanyEntity>): Promise<CompanyEntity | undefined>;
}
