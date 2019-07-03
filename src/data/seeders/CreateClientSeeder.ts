import Seeder from './cli/interfaces/Seeder';
import { FactoryStatic } from '../factories/interfaces/Factory';
import PersonJobEntity from '../entities/PersonJobEntity';
import PersonAddressEntity from '../entities/PersonAddressEntity';
import SpousePersonEntity from '../entities/SpousePersonEntity';
import AdditionalInformationEntity from '../entities/AdditionalInformationEntity';
import PersonContactEntity from '../entities/PersonContactEntity';

export default class CreateClientSeeder implements Seeder {
  async seed(factory: FactoryStatic): Promise<void> {
    await factory.get(PersonJobEntity).create();
    await factory.get(PersonAddressEntity).create();
    await factory.get(AdditionalInformationEntity).create();
    await factory.get(PersonContactEntity).create();
    await factory.get(SpousePersonEntity).create();
  }
}
