import { define } from '../seeders/cli/Seed';
import SpousePersonEntity from '../entities/SpousePersonEntity';
import { FactoryStatic } from './interfaces/Factory';
import RepositoryModule from '../../application/modules/RepositoryModule';
import PersonEntity from '../entities/PersonEntity';

define(SpousePersonEntity, async (faker: Faker.FakerStatic, factory: FactoryStatic)
  : Promise<SpousePersonEntity> => {

  // Get person
  const personFind = await RepositoryModule.personRepository().findOne();
  const person = personFind ? personFind : await factory.get(PersonEntity).create();

  // Create spouse person
  const spousePerson = new SpousePersonEntity();
  spousePerson.name = faker.name.firstName();
  spousePerson.phone = faker.phone.phoneNumber();
  spousePerson.person = person;
  return spousePerson;

});
