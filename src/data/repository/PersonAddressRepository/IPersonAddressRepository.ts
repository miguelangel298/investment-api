import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import {
  FindConditions, FindManyOptions,
  FindOneOptions,
  InsertResult,
  ObjectID,
  SaveOptions,
  UpdateResult,
} from 'typeorm';
import PersonAddressEntity from '../../entities/PersonAddressEntity';

export default interface IPersonAddressRepository {

  insert(entity: QueryDeepPartialEntity<PersonAddressEntity>
    | (QueryDeepPartialEntity<PersonAddressEntity>[]),
         options?: SaveOptions): Promise<InsertResult>;

  findOne(conditions?: FindConditions<PersonAddressEntity>,
          options?: FindOneOptions<PersonAddressEntity>):
    Promise<PersonAddressEntity | undefined>;

  update(criteria: string | string[] | number | number[] | Date | Date[] | ObjectID |
           ObjectID[] | FindConditions<PersonAddressEntity>,
         partialEntity: QueryDeepPartialEntity<PersonAddressEntity>,
         options?: SaveOptions): Promise<UpdateResult>;

  find(conditions?: FindConditions<PersonAddressEntity> | FindManyOptions<PersonAddressEntity>):
    Promise<PersonAddressEntity[]>;

}
