import { FindOneOptions, ObjectID } from 'typeorm';
import GenderEntity from '../../entities/GenderEntity';

export default interface IGenderRepository {

  findOne(id?: string | number | Date | ObjectID, options?:
    FindOneOptions<GenderEntity>): Promise<GenderEntity | undefined>;
}
