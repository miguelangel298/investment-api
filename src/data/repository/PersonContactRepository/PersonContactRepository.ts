import { Repository } from 'typeorm';
import PersonContactEntity from '../../entities/PersonContactEntity';
import IPersonContactRepository from './IPersonContactRepository';

export default class PersonContactRepository extends Repository<PersonContactEntity>
  implements IPersonContactRepository {

}
