import IWalletRepository from './IWalletRepository';
import WalletEntity from '../../entities/WalletEntity';
import { FindConditions, FindOneOptions } from 'typeorm';

export default class WalletRepositoryMock implements IWalletRepository {

  public static entities: WalletEntity[] = [{
    id: 1,
    name: 'admin',
  } as WalletEntity,
  ];

  async findOne(conditions?: FindConditions<WalletEntity>, options?:
    FindOneOptions<WalletEntity>): Promise<WalletEntity | undefined> {
    return WalletRepositoryMock.entities[0];
  }
}
