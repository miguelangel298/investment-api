import IUserRepository from './IUserRepository';
import { FindConditions, FindOneOptions } from 'typeorm';
import UserEntity from '../../entities/UserEntity';

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

}
