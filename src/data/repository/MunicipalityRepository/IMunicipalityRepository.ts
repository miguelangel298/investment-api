import { FindConditions, FindOneOptions, ObjectID } from 'typeorm';
import MunicipalityEntity from '../../entities/MunicipalityEntity';

export default interface IMunicipalityRepository {

  findOne(id?: string | number | Date | ObjectID, options?:
    FindOneOptions<MunicipalityEntity>): Promise<MunicipalityEntity | undefined>;

  find(conditions?: FindConditions<MunicipalityEntity>): Promise<MunicipalityEntity[]>;
}
