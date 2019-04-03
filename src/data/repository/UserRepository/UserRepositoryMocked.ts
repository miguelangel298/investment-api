import IUserRepository from './IUserRepository';
import { FindConditions, FindOneOptions } from 'typeorm';
import UserEntity from '../../entities/UserEntity';

export default class UserRepositoryMocked implements IUserRepository {

  async findOne(conditions?: FindConditions<UserEntity>, options?: FindOneOptions<UserEntity>):
    Promise<UserEntity | undefined> {
    return ;
  }

}
