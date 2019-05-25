import { FindOneOptions, ObjectID } from 'typeorm';
import NationalityEntity from '../../entities/NationalityEntity';

export default interface INationalityRepository {

  findOne(id?: string | number | Date | ObjectID, options?:
    FindOneOptions<NationalityEntity>): Promise<NationalityEntity | undefined>;
}
