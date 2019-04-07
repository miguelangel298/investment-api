import { FindConditions, FindOneOptions } from 'typeorm';
import UserEntity from '../../entities/UserEntity';

export default interface  IUserRepository {

  findOne(conditions?: FindConditions<UserEntity>, options?:
    FindOneOptions<UserEntity>): Promise<UserEntity | undefined>;

  getOneByQuery(query: Partial<UserEntity>): Promise<UserEntity>;

}
