import { EntityRepository, Repository } from 'typeorm';
import CompanyEntity from '../../entities/CompanyEntity';
import ICompanyRepository from './ICompanyRepository';

@EntityRepository(CompanyEntity)
export default class CompanyRepository extends Repository<CompanyEntity>
  implements ICompanyRepository { }
