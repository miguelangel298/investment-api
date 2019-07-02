import { define } from '../seeders/cli/Seed';
import DateOfPaymentEntity from '../entities/DateOfPaymentEntity';
import { FactoryStatic } from './interfaces/Factory';
import CompanyEntity from '../entities/CompanyEntity';
import RepositoryModule from '../../application/modules/RepositoryModule';

define(DateOfPaymentEntity, async (faker: Faker.FakerStatic,
                                   factory: FactoryStatic):
  Promise<DateOfPaymentEntity> => {

  // Get company
  const companyFind = await RepositoryModule.companyRepository().findOne();
  const company = companyFind ? companyFind : await factory.get(CompanyEntity).create();

  const entity = new DateOfPaymentEntity();
  entity.day = faker.random.number({ min: 1, max: 30 });
  entity.company = company;
  return entity;
});
