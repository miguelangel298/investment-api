import { FindConditions, FindOneOptions } from 'typeorm';
import WalletEntity from '../../entities/WalletEntity';

export default interface IWalletRepository {
  findOne(conditions?: FindConditions<WalletEntity>, options?:
    FindOneOptions<WalletEntity>): Promise<WalletEntity | undefined>;
}
