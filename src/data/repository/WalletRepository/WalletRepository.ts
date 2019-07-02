import { EntityRepository, Repository } from 'typeorm';
import WalletEntity from '../../entities/WalletEntity';
import IWalletRepository from './IWalletRepository';

@EntityRepository(WalletEntity)
export default class WalletRepository extends Repository<WalletEntity>
  implements IWalletRepository { }
