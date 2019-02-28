import ExampleEntity from '../../data/entities/ExampleEntity';
import { Repository } from 'typeorm';

export default class ExampleRepository extends Repository<ExampleEntity> {

  getExampleById(id: number): Promise<ExampleEntity> {
    return this.findOne(id);
  }
}
