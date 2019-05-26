import { FindConditions, FindOneOptions, InsertResult, SaveOptions } from 'typeorm';
import UserEntity from '../../entities/UserEntity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export default interface  IUserRepository {

  findOne(conditions?: FindConditions<UserEntity>, options?:
    FindOneOptions<UserEntity>): Promise<UserEntity | undefined>;

  getOneByQuery(query: Partial<UserEntity>): Promise<UserEntity>;

  insert(entity: QueryDeepPartialEntity<UserEntity>
    | (QueryDeepPartialEntity<UserEntity>[]),
         options?: SaveOptions): Promise<InsertResult>;

}
