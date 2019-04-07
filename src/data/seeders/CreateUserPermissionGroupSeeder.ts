import Seeder from './cli/interfaces/Seeder';
import { FactoryStatic } from '../factories/interfaces/Factory';
import UserPermissionGroupEntity from '../entities/UserPermissionGroupEntity';

export default class CreateUserPermissionGroupSeeder implements Seeder {
  async seed(factory: FactoryStatic): Promise<void> {
    await factory.get(UserPermissionGroupEntity).create();
  }

}
