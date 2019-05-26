import IUserRepository from './IUserRepository';
import { FindConditions, FindOneOptions, InsertResult, SaveOptions } from 'typeorm';
import UserEntity from '../../entities/UserEntity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export default class UserRepositoryMock implements IUserRepository {

  public static entities: UserEntity[] = [{
    id: 1,
    username: 'admin',
  } as UserEntity,
  ];

  async findOne(conditions?: FindConditions<UserEntity>, options?: FindOneOptions<UserEntity>):
    Promise<UserEntity | undefined> {
    return UserRepositoryMock.entities[0];
  }

  async getOneByQuery(query: Partial<UserEntity>): Promise<UserEntity> {
    return UserRepositoryMock.entities[0];
  }

  async insert(entity: QueryDeepPartialEntity<UserEntity> | QueryDeepPartialEntity<UserEntity>[],
               options?: SaveOptions): Promise<InsertResult> {
    return undefined;
  }

}
