import { define } from '../seeders/cli/Seed';
import PersonAddressEntity from '../entities/PersonAddressEntity';
import { FactoryStatic } from './interfaces/Factory';
import RepositoryModule from '../../application/modules/RepositoryModule';
import UserEntity from '../entities/UserEntity';
import ProvinceEntity from '../entities/ProvinceEntity';

define(PersonAddressEntity, async (faker: Faker.FakerStatic, factory:
  FactoryStatic): Promise<PersonAddressEntity> => {

  // Get user
  const userFind = await RepositoryModule.userRepository().findOne();
  const user = userFind ? userFind : await factory.get(UserEntity).create();

  // Get province
  const provinceFind = await RepositoryModule.provinceRepsotiry().findOne();
  const province = provinceFind ? provinceFind : await factory.get(ProvinceEntity).create();

  const personAddress = new PersonAddressEntity();

  personAddress.sector = faker.address.city();
  personAddress.building = faker.address.countryCode();
  personAddress.detail = faker.address.secondaryAddress();
  personAddress.active = false;
  personAddress.number = faker.address.state(true);
  personAddress.province = province;
  personAddress.createdAt = new Date();
  personAddress.createdBy = user;
  return personAddress;

});
