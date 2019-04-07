import { EntityRepository, Repository } from 'typeorm';
import UserPermissionGroupEntity from '../../entities/UserPermissionGroupEntity';
import IUserPermissionGroupRepository from './IUserPermissionGroupRepository';

@EntityRepository(UserPermissionGroupEntity)
export default class UserPermissionGroupRepository extends Repository<UserPermissionGroupEntity>
  implements IUserPermissionGroupRepository { }
