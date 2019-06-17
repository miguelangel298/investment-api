import { EntityRepository, Repository } from 'typeorm';
import PersonAddressEntity from '../../entities/PersonAddressEntity';
import IPersonAddressRepository from './IPersonAddressRepository';

@EntityRepository(PersonAddressEntity)
export default class PersonAddressRepository extends Repository<PersonAddressEntity>
 implements IPersonAddressRepository {

}
