import Seeder from './cli/interfaces/Seeder';
import { FactoryStatic } from '../factories/interfaces/Factory';
import PermissionGroupEntity from '../entities/PermissionGroupEntity';

export default class CreatePermissionGroupSeeder implements Seeder {
  async seed(factory: FactoryStatic): Promise<void> {
    await factory.get(PermissionGroupEntity).create();
  }
}
