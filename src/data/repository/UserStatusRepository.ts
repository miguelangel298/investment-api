import { Repository, EntityRepository } from 'typeorm';
import UserStatusEntity from '../entities/UserStatusEntity';

@EntityRepository(UserStatusEntity)
export default class UserStatusRepository extends Repository<UserStatusEntity> { }
