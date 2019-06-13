import { define } from '../seeders/cli/Seed';
import DayOfPaymentEntity from '../entities/DayOfPaymentEntity';

define(DayOfPaymentEntity, async (faker: Faker.FakerStatic)
  : Promise<DayOfPaymentEntity> => {
  const entity = new DayOfPaymentEntity();
  entity.name = faker.name.title();
  entity.dues = 2;
  return entity;
});
