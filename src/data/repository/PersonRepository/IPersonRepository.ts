import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { FindConditions, FindOneOptions, InsertResult, SaveOptions } from 'typeorm';
import PersonEntity from '../../entities/PersonEntity';

export default interface IPersonRepository {
  insert(entity: QueryDeepPartialEntity<PersonEntity>
    | (QueryDeepPartialEntity<PersonEntity>[]),
         options?: SaveOptions): Promise<InsertResult>;

  findOne(conditions?: FindConditions<PersonEntity>,
          options?: FindOneOptions<PersonEntity>): Promise<PersonEntity | undefined>;

}
