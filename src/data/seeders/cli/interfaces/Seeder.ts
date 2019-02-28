import { FactoryStatic } from '../../../factories/interfaces/Factory';

export default interface Seeder {
  seed(factory: FactoryStatic): Promise<void>;
}
