import { define } from '../seeders/cli/Seed';
import BranchOfficeEntity from '../entities/BranchOfficeEntity';
import { FactoryStatic } from './interfaces/Factory';
import RepositoryModule from '../../application/modules/RepositoryModule';
import UserEntity from '../entities/UserEntity';
import CompanyEntity from '../entities/CompanyEntity';
import WalletEntity from '../entities/WalletEntity';
import BranchOfOfficeStatusEntity from '../entities/BranchOfOfficeStatusEntity';

define(BranchOfficeEntity, async (faker: Faker.FakerStatic,
                                  factory: FactoryStatic): Promise<BranchOfficeEntity> => {

  // Get user
  const userFind = await RepositoryModule.userRepository().findOne();
  const user = userFind ? userFind : await factory.get(UserEntity).create();

  // Get company
  const companyFind = await RepositoryModule.companyRepository().findOne();
  const company = companyFind ? companyFind : await factory.get(CompanyEntity).create();

  // Get wallet
  const walletFind = await RepositoryModule.walletRepository().findOne();
  const wallet = walletFind ? walletFind : await factory.get(WalletEntity).create();

  // Get status
  const statusFind = await RepositoryModule.branchOfOfficeStatusRepository().findOne();
  const status = statusFind ? statusFind : await factory.get(BranchOfOfficeStatusEntity).create();

  // Create branch office
  const branchOffice = new BranchOfficeEntity();
  branchOffice.name = faker.company.companyName();
  branchOffice.location = faker.lorem.lines(3);
  branchOffice.minPercent = faker.random.number({ max: 10 });
  branchOffice.maxPercent = faker.random.number({ max: 10 });
  branchOffice.company = company;
  branchOffice.status = status;
  branchOffice.wallet = wallet;
  branchOffice.createdBy = user;
  branchOffice.createdAt = new Date();

  console.log(branchOffice);
  return branchOffice;
});
