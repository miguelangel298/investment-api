import { define } from '../seeders/cli/Seed';
import WalletEntity from '../entities/WalletEntity';
import { FactoryStatic } from './interfaces/Factory';
import RepositoryModule from '../../application/modules/RepositoryModule';
import UserEntity from '../entities/UserEntity';

define(WalletEntity, async (faker: Faker.FakerStatic,
                            factory: FactoryStatic): Promise<WalletEntity> => {
  // Get user
  const userFind = await RepositoryModule.userRepository().findOne();
  const user = userFind ? userFind : await factory.get(UserEntity).create();

  const wallet = new WalletEntity();
  wallet.name =  faker.company.companyName();
  wallet.description = faker.company.catchPhraseDescriptor();
  wallet.representative = user;
  wallet.createdBy = user;
  wallet.updatedBy = user;
  wallet.createdAt = new Date();
  wallet.updatedAt = new Date();
  return wallet;
});
