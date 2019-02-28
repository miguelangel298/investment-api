import Seeder from './cli/interfaces/Seeder';
import { FactoryStatic } from '../factories/interfaces/Factory';
import UserEntity from '../entities/UserEntity';

export default class CreateUserSeeder implements Seeder {
  async seed(factory: FactoryStatic): Promise<void> {
    await factory.get(UserEntity).createMany(2);
  }
}
