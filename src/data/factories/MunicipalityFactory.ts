import { define } from '../seeders/cli/Seed';
import MunicipalityEntity from '../entities/MunicipalityEntity';
import { FactoryStatic } from './interfaces/Factory';
import RepositoryModule from '../../application/modules/RepositoryModule';
import ProvinceEntity from '../entities/ProvinceEntity';

define(MunicipalityEntity, async (faker: Faker.FakerStatic,
                                  factory: FactoryStatic): Promise<MunicipalityEntity> => {
  // Get province.
  const provinceFind = await RepositoryModule.provinceRepository().findOne();
  const province = provinceFind ? provinceFind : await factory.get(ProvinceEntity).create();

  // Create new municipality.
  const municipality = new MunicipalityEntity();
  municipality.name = faker.address.city();
  municipality.code = faker.address.state(true);
  municipality.province = province;
  return municipality;

});
