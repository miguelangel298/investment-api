import { define } from '../seeders/cli/Seed';
import AdditionalInformationEntity from '../entities/AdditionalInformationEntity';
import { FactoryStatic } from './interfaces/Factory';
import RepositoryModule from '../../application/modules/RepositoryModule';
import PersonEntity from '../entities/PersonEntity';
import CivilStatusEntity from '../entities/CivilStatusEntity';

define(AdditionalInformationEntity, async (faker: Faker.FakerStatic,
                                           factory: FactoryStatic):
  Promise<AdditionalInformationEntity> => {

  // Get person
  const personFind = await RepositoryModule.personRepository().findOne();
  const person = personFind ? personFind : await factory.get(PersonEntity).create();

  // Get person
  const civilStatusFind = await RepositoryModule.civilStatusRepository().findOne();
  const civilStatus = civilStatusFind ? civilStatusFind :
    await factory.get(CivilStatusEntity).create();

  // Create Additional information
  const additionalInformation = new AdditionalInformationEntity();
  additionalInformation.motherName = faker.name.firstName();
  additionalInformation.fatherName = faker.name.firstName();
  additionalInformation.civilStatus = civilStatus;
  additionalInformation.person = person;
  return additionalInformation;
});
