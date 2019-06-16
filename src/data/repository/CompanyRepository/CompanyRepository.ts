import { Repository } from 'typeorm';
import CompanyEntity from '../../entities/CompanyEntity';
import ICompanyRepository from './ICompanyRepository';

export default class CompanyRepository extends Repository<CompanyEntity>
  implements ICompanyRepository { }
