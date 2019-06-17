import { EntityRepository, Repository } from 'typeorm';
import ContactTypeEntity from '../../entities/ContactTypeEntity';
import IContactTypeRepository from './IContactTypeRepository';

@EntityRepository(ContactTypeEntity)
export default class ContactTypeRepository extends Repository<ContactTypeEntity>
 implements IContactTypeRepository {

}
