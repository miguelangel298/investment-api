import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { FindConditions, FindManyOptions, FindOneOptions, InsertResult, SaveOptions }
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

}
