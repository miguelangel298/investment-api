import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { FindConditions,
  FindManyOptions,
  FindOneOptions,
  InsertResult,
  ObjectID,
  SaveOptions,
  UpdateResult }
  from 'typeorm';
import PersonJobEntity from '../../entities/PersonJobEntity';

export default interface IPersonJobRepository {

  insert(entity: QueryDeepPartialEntity<PersonJobEntity>
    | (QueryDeepPartialEntity<PersonJobEntity>[]),
         options?: SaveOptions): Promise<InsertResult>;

  findOne(conditions?: FindConditions<PersonJobEntity>,
          options?: FindOneOptions<PersonJobEntity>): Promise<PersonJobEntity | undefined>;

  find(conditions?: FindConditions<PersonJobEntity> | FindManyOptions<PersonJobEntity>):
    Promise<PersonJobEntity[]>;

  update(criteria: string | string[] | number | number[] | Date | Date[] | ObjectID |
    ObjectID[] | FindConditions<PersonJobEntity>,
         partialEntity: QueryDeepPartialEntity<PersonJobEntity>,
         options?: SaveOptions): Promise<UpdateResult>;

}
