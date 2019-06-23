import { EntityRepository, Repository } from 'typeorm';
import CivilStatusEntity from '../../entities/CivilStatusEntity';
import ICivilStatusRepository from './ICivilStatusRepository';

@EntityRepository(CivilStatusEntity)
export default class CivilStatusRepository extends Repository<CivilStatusEntity>
  implements ICivilStatusRepository {

}
