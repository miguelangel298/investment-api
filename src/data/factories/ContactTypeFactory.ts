import { define } from '../seeders/cli/Seed';
import ContactTypeEntity from '../entities/ContactTypeEntity';

define(ContactTypeEntity, async (faker: Faker.FakerStatic)
  : Promise<ContactTypeEntity> => {

  const contactType = new ContactTypeEntity();
  contactType.name = faker.random.alphaNumeric(20);
  return contactType;
});
