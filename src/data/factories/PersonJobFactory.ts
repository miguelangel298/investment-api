import { define } from '../seeders/cli/Seed';
import PersonJobEntity from '../entities/PersonJobEntity';
import { FactoryStatic } from './interfaces/Factory';
import RepositoryModule from '../../application/modules/RepositoryModule';
import PersonEntity from '../entities/PersonEntity';
import UserEntity from '../entities/UserEntity';
import BranchOfficeEntity from '../entities/BranchOfficeEntity';

define(PersonJobEntity, async (faker: Faker.FakerStatic,
                               factory: FactoryStatic): Promise<PersonJobEntity> => {

  // Get user
  const userFind = await RepositoryModule.userRepository().findOne();
  const user = userFind ? userFind : await factory.get(UserEntity).create();

  // Get person
  const personFind = await RepositoryModule.personRepository().findOne();
  const person = personFind ? personFind : await factory.get(PersonEntity).create();

  // Get branch office
  const branchOfficeFind = await RepositoryModule.branchOfficeRepository().findOne();
  const branchOffice =
    branchOfficeFind ? branchOfficeFind : await factory.get(BranchOfficeEntity).create();

  const personJob = new PersonJobEntity();
  personJob.position = faker.name.jobType();
  personJob.supervisorName = `${faker.name.firstName(1)} ${faker.name.lastName(1)}`;
  personJob.supervisorPhone = faker.phone.phoneNumber();
  personJob.employeeCode = faker.random.alphaNumeric(5);
  personJob.dateAdmission = new Date();
  personJob.currentJob = true;
  personJob.salary = faker.random.number({ max: 10000 });
  personJob.branchOffice = branchOffice;
  personJob.person = person;
  personJob.createdBy = user;
  personJob.createdAt = new Date();
  return personJob;
});
