import { define } from '../seeders/cli/Seed';
import BankEntity from '../entities/BankEntity';

define(BankEntity, async (faker: Faker.FakerStatic): Promise<BankEntity> => {
  const bank = new BankEntity();
  bank.name = faker.company.companyName();
  return bank;
});
