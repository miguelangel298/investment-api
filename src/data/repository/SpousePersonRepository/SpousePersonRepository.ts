import { Repository } from 'typeorm';
import SpousePersonEntity from '../../entities/SpousePersonEntity';
import ISpousePersonRepository from './ISpousePersonRepository';

export default class SpousePersonRepository extends Repository<SpousePersonEntity>
  implements ISpousePersonRepository {

}
