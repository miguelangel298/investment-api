import { EntityRepository, Repository } from 'typeorm';
import PersonJobEntity from '../../entities/PersonJobEntity';
import IPersonJobRepository from './IPersonJobRepository';

@EntityRepository(PersonJobEntity)
export default class PersonJobRepository extends Repository<PersonJobEntity>
  implements IPersonJobRepository {

}
