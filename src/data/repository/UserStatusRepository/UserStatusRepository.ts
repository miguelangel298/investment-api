import { Repository, EntityRepository } from 'typeorm';
import UserStatusEntity from '../../entities/UserStatusEntity';
import IUserStatusRepository from './IUserStatusRepository';

@EntityRepository(UserStatusEntity)
export default class UserStatusRepository extends Repository<UserStatusEntity>
  implements IUserStatusRepository { }
