import { define } from '../seeders/cli/Seed';
import BranchOfficeEntity from '../entities/BranchOfficeEntity';
import { FactoryStatic } from './interfaces/Factory';
import RepositoryModule from '../../application/modules/RepositoryModule';
import UserEntity from '../entities/UserEntity';
import CompanyEntity from '../entities/CompanyEntity';
import WalletEntity from '../entities/WalletEntity';

define(BranchOfficeEntity, async (faker: Faker.FakerStatic,
                                  factory: FactoryStatic): Promise<BranchOfficeEntity> => {

  // Get user
  const userFind = await RepositoryModule.userRepository().findOne();
  const user = userFind ? userFind : await factory.get(UserEntity).create();

  // Get company
  const companyFind = await RepositoryModule.userRepository().findOne();
  const company = companyFind ? companyFind : await factory.get(CompanyEntity).create();

  // Get wallet
  const walletFind = await RepositoryModule.userRepository().findOne();
  const wallet = walletFind ? walletFind : await factory.get(WalletEntity).create();

  const branchOffice = new BranchOfficeEntity();

});
