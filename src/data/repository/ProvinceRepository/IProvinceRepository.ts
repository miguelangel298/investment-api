import { FindConditions, FindOneOptions, ObjectID } from 'typeorm';
import ProvinceEntity from '../../entities/ProvinceEntity';

export default interface IProvinceRepository {

  findOne(id?: string | number | Date | ObjectID, options?:
    FindOneOptions<ProvinceEntity>): Promise<ProvinceEntity | undefined>;

  find(conditions?: FindConditions<ProvinceEntity>): Promise<ProvinceEntity[]>;

}
