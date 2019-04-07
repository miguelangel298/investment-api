import { Repository, EntityRepository } from 'typeorm';
import PersonEntity from '../../entities/PersonEntity';
import IPersonRepository from './IPersonRepository';

@EntityRepository(PersonEntity)
export default class PersonRepository extends Repository<PersonEntity>
  implements IPersonRepository {

}
