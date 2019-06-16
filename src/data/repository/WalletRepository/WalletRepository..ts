import { Repository } from 'typeorm';
import WalletEntity from '../../entities/WalletEntity';
import IWalletRepository from './IWalletRepository';

export default class WalletRepository extends Repository<WalletEntity>
  implements IWalletRepository { }
