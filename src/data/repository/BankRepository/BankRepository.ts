import { EntityRepository, Repository } from 'typeorm';
import BankEntity from '../../entities/BankEntity';
import IBankRepository from './IBankRepository';

@EntityRepository(BankEntity)
export default class BankRepository extends Repository<BankEntity> implements IBankRepository { }
