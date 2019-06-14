import { define } from '../seeders/cli/Seed';
import DateOfPaymentEntity from '../entities/DateOfPaymentEntity';
import { FactoryStatic } from './interfaces/Factory';
import CompanyEntity from '../entities/CompanyEntity';

define(DateOfPaymentEntity, async (faker: Faker.FakerStatic,
                                   factory: FactoryStatic):
  Promise<DateOfPaymentEntity> => {
  const entity = new DateOfPaymentEntity();
  entity.day = faker.random.number({ min: 1, max: 30 });
  entity.company = await factory.get(CompanyEntity).create();
  return entity;
});
