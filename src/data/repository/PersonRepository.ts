import { Repository, EntityRepository } from 'typeorm';
import PersonEntity from '../entities/PersonEntity';

@EntityRepository(PersonEntity)
export default class PersonRepository extends Repository<PersonEntity> {

}
