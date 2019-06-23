import { FindConditions } from 'typeorm';
import CivilStatusEntity from '../../entities/CivilStatusEntity';

export default interface ICivilStatusRepository {

  find(conditions?: FindConditions<CivilStatusEntity>): Promise<CivilStatusEntity[]>;

}
