import { define } from '../seeders/cli/Seed';
import PersonEntity from '../entities/PersonEntity';
import { FactoryStatic } from './interfaces/Factory';
import GenderEntity from '../entities/GenderEntity';
import NationalityEntity from '../entities/NationalityEntity';

define(PersonEntity, async (faker: Faker.FakerStatic, factory: FactoryStatic)
  : Promise<PersonEntity> => {
  const person = new PersonEntity();
  person.names = faker.name.firstName(1);
  person.firstSurname = faker.name.lastName(1);
  person.passport = faker.random.alphaNumeric(10);
  person.createdAt = new Date();
  person.secondSurname = faker.name.lastName(1);
  person.cardId = faker.random.number({ max:11 });
  person.gender = await factory.get(GenderEntity).create();
  person.nationality = await factory.get(NationalityEntity).create();
  person.birthDate = new Date();
  return person;
});
