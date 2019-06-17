import { Repository } from 'typeorm';
import CivilStatusEntity from '../../entities/CivilStatusEntity';
import ICivilStatusRepository from './ICivilStatusRepository';

export default class CivilStatusRepository extends Repository<CivilStatusEntity>
  implements ICivilStatusRepository {

}
