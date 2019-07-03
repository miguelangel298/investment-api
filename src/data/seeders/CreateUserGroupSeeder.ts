import Seeder from './cli/interfaces/Seeder';
import { FactoryStatic } from '../factories/interfaces/Factory';
import PermissionGroupEntity from '../entities/PermissionGroupEntity';
import UserPermissionGroupEntity from '../entities/UserPermissionGroupEntity';

export default class CreateUserGroupSeeder implements Seeder {
  async seed(factory: FactoryStatic): Promise<void> {
    await factory.get(PermissionGroupEntity).create();
    await factory.get(UserPermissionGroupEntity).create();
  }
}
