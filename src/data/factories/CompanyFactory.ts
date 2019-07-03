import { define } from '../seeders/cli/Seed';
import CompanyEntity from '../entities/CompanyEntity';
import { FactoryStatic } from './interfaces/Factory';
import BankEntity from '../entities/BankEntity';
import DayOfPaymentEntity from '../entities/DayOfPaymentEntity';
import RepositoryModule from '../../application/modules/RepositoryModule';

define(CompanyEntity, async (faker: Faker.FakerStatic,
                             factory: FactoryStatic): Promise<CompanyEntity> => {
  // Get bank
  const bankFind = await RepositoryModule.bankRepository().findOne();
  const bank = bankFind ? bankFind : await factory.get(BankEntity).create();

  const company = new CompanyEntity();
  company.name = faker.company.companyName();
  company.address = faker.company.catchPhraseDescriptor();
  company.phone = faker.phone.phoneNumber();
  company.ext = faker.random.alphaNumeric(3);
  company.bankBy = bank;
  company.dayOfPaymentBy = await factory.get(DayOfPaymentEntity).create();
  return company;
});
