import { define } from '../seeders/cli/Seed';
import BranchOfOfficeStatusEntity from '../entities/BranchOfOfficeStatusEntity';

define(BranchOfOfficeStatusEntity, async (faker: Faker.FakerStatic)
  :Promise<BranchOfOfficeStatusEntity> => {
  const entity = new BranchOfOfficeStatusEntity();
  entity.name = faker.name.jobType();
  return entity;
});
