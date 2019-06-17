import { define } from '../seeders/cli/Seed';
import PersonContactEntity from '../entities/PersonContactEntity';
import { FactoryStatic } from './interfaces/Factory';
import RepositoryModule from '../../application/modules/RepositoryModule';
import ContactTypeEntity from '../entities/ContactTypeEntity';
import PersonEntity from '../entities/PersonEntity';

define(PersonContactEntity, async (faker: Faker.FakerStatic,
                                   factory: FactoryStatic): Promise<PersonContactEntity> => {

  // Get contactType
  const contactTypeFind = await RepositoryModule.contactTypeRepository().findOne();
  const contactType = contactTypeFind ? contactTypeFind :
    await factory.get(ContactTypeEntity).create();

  // Get person
  const personFind = await RepositoryModule.personRepository().findOne();
  const person = personFind ? personFind : await factory.get(PersonEntity).create();

  // Create person contact
  const personContact = new PersonContactEntity();
  personContact.value = faker.internet.email();
  personContact.person = person;
  personContact.contactType = contactType;
  return  personContact;

});
